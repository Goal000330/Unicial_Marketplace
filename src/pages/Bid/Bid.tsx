import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import SliceMap from "../../components/SliceMap";
import ActionButton from "../../components/Base/ActionButton";
import { useStyles, StyledInput } from "./BidStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import normalshapeSvg from "../../assets/svg/normalshape.svg";
import calendar_icon from "../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showAlert } from "../../store/alert";
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { BigNumber, ethers } from "ethers";
import { selectLoginAddress } from "../../store/auth/selectors";
import { min, max } from "../../store/bidContractData/selectors";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../config/contracts/BidContract";
import {
  UccContractAbi,
  UccContractAddress,
} from "../../config/contracts/UnicialCashToken";
import { totalSpace } from "../../store/parcels/selectors";
import { SpaceProxyAddress } from "../../config/contracts/SpaceRegistryContract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../config/contracts/EstateRegitryContract";

declare var window: any;
var signer: any, bidContract: any, uccContract: any, estateContract: any;

const uccApprovalAmount = BigNumber.from(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
);

const Bid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { contractaddress, tokensid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);
  const tiles: any = useAppSelector(totalSpace);
  const maxTime = useAppSelector(max);
  const minTime = useAppSelector(min);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [price, setPrice] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);
  const [bidStatus, setBidStatus] = useState(true);

  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0));
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  signer = generateSigner(window.ethereum);

  uccContract = generateContractInstance(
    UccContractAddress,
    UccContractAbi,
    signer
  );

  bidContract = generateContractInstance(
    BidContractAddress,
    BidContractAbi,
    signer
  );

  estateContract = generateContractInstance(
    EstateProxyAddress,
    EstateRegistryAbi,
    signer
  );

  const initAllowance = async () => {
    let allowance = await uccContract.allowance(
      loginAddress,
      BidContractAddress
    );

    if (!allowance.gt(0)) {
      dispatch(
        showAlert({
          message:
            "You have to first approve the marketplace contract to operate your asset. Please click Approve button.",
          severity: "error",
        })
      );
    }

    setUccAllowance(allowance);
  };

  useEffect(() => {
    initAllowance();
    uccAllowance.gt(0) ? setBidStatus(false) : setBidStatus(true);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uccAllowance.toString()]);

  useEffect(() => {
    Object.keys(tiles).forEach((index: any) => {
      const allParcel = tiles[index];
      if (
        allParcel.tokenId === tokensid &&
        contractaddress === SpaceProxyAddress
      ) {
        setX(allParcel.x);
        setY(allParcel.y);
      }
      if (
        allParcel.estateId === tokensid &&
        contractaddress === EstateProxyAddress
      ) {
        setX(allParcel.x);
        setY(allParcel.y);
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles, tokensid]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    let time =
      selectedDate !== null && Math.round(selectedDate.getTime() / 1000);
    let currenttime = Math.round(new Date().getTime() / 1000);
    time !== false && setTimeStamp(time - currenttime);
  }, [selectedDate]);

  const handleApprove = async () => {
    let approveMarketTx = await uccContract.approve(
      BidContractAddress,
      uccApprovalAmount
    );
    await approveMarketTx.wait();

    let allowance = await uccContract.allowance(
      loginAddress,
      BidContractAddress
    );
    setUccAllowance(allowance);

    dispatch(
      showAlert({
        message:
          "Successfully approved. You have to confirm order creation transaction to finally publich your order.",
        severity: "success",
      })
    );
  };

  const handleCancelApprove = async () => {};

  const handleBid = async () => {
    if (loginAddress.length === 0) {
      dispatch(
        showAlert({
          message: "You have to connect Meta mask wallet.",
          severity: "error",
        })
      );
      navigate("/signin");
      return;
    }
    if (timeStamp < minTime || timeStamp > maxTime) {
      dispatch(
        showAlert({
          message: "Expiration date have to put between 1 minute and 1 year.",
          severity: "error",
        })
      );
      return;
    }

    if (price === 0) {
      dispatch(
        showAlert({
          message: "You have to set price value to sell.",
          severity: "error",
        })
      );
      return;
    }

    let uccBalance = await uccContract.balanceOf(loginAddress);

    if (price > parseInt(ethers.utils.formatUnits(uccBalance, 18))) {
      dispatch(
        showAlert({
          message:
            "You must set a price value that is lower than the Ucctoken value in your account.",
          severity: "error",
        })
      );
      return;
    }

    let bidOrderTx;

    if (contractaddress === SpaceProxyAddress) {
      bidOrderTx = await bidContract[
        "placeBid(address,uint256,uint256,uint256)"
      ](
        contractaddress,
        BigNumber.from(tokensid),
        ethers.utils.parseEther(price.toString()), // price in wei
        BigNumber.from(timeStamp),
        { from: loginAddress } // expireAt to UTC timestamp
      );
    }
    if (contractaddress === EstateProxyAddress) {
      let fingerPrint = await estateContract.getFingerprint(tokensid);

      bidOrderTx = await bidContract[
        "placeBid(address,uint256,uint256,uint256,bytes)"
      ](
        contractaddress,
        BigNumber.from(tokensid),
        ethers.utils.parseEther(price.toString()), // price in wei
        BigNumber.from(timeStamp),
        fingerPrint,
        { from: loginAddress } // expireAt to UTC timestamp
      );
    }

    await bidOrderTx.wait();

    dispatch(
      showAlert({
        message: "Bid order is successfully published.",
        severity: "success",
      })
    );
    navigate(-1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container_root}>
        <BackButton className={classes.backButton} />
        <div className={classes.bidCard}>
          <div className={classes.leftCard}>
            <div className={classes.imgContent}>
              <SliceMap centerX={x} centerY={y} />
            </div>
          </div>
          <div className={classes.rightCard}>
            <div className={classes.title}>{t("Place a Bid")}</div>
            <div className={classes.subtitle}>
              {t("Set a price and expiration date for your bid on")}{" "}
              <span>{t("Genesis Plaza")}</span>.
            </div>
            <div className={classes.form_field}>
              <div className={classes.price_container}>
                <Grid container>
                  <Grid md={6} sm={6} xs={6} item>
                    <div className={classes.subheader_label}>{t("PRICE")}</div>
                    <FormControl>
                      <StyledInput
                        placeholder="0"
                        onChange={(e) => handleChange(e)}
                        startAdornment={
                          <InputAdornment position="start">
                            <img src={normalshapeSvg} alt="settingIcon" />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid md={6} sm={6} xs={6} item>
                    <div className={classes.subheader_label}>
                      {t("EXPIRATION DATE")}
                    </div>
                    <FormControl>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          className={classes.datePicker}
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-dialog"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          keyboardIcon={
                            <img src={calendar_icon} alt="calendarIcon" />
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </div>
            {/* buttons */}
            <div className={classes.buttons}>
              <ActionButton
                color="light"
                className={classes.approve}
                onClick={bidStatus ? handleApprove : handleCancelApprove}
              >
                {bidStatus ? t("Approve") : t("Cancel Approve")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="light"
                className={classes.bidchange}
                disabled={bidStatus}
                onClick={handleBid}
              >
                {t("Bid")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="dark"
                className={classes.cancelchange}
                onClick={() => navigate(-1)}
              >
                {t("Cancel")}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bid;
