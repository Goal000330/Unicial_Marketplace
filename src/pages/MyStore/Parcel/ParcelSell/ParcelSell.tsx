import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BigNumber, ethers } from "ethers";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";

import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./ParcelSellStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import calendar_icon from "../../../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { showAlert } from "../../../../store/alert";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";

import {
  MarketplaceAddress,
  MarketplaceAbi,
} from "../../../../config/contracts/MarketPlaceContract";

import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { isParcelApproved, isEstateApproved } from "../../../../hooks/api";

declare var window: any;
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const ParcelSell = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [price, setPrice] = useState(0);
  const loginAddress = useAppSelector(selectLoginAddress);
  const [timeStamp, setTimeStamp] = useState(0);

  const { contractaddress, tokensid } = useParams();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let time =
      selectedDate !== null && Math.round(selectedDate.getTime() / 1000);
    time !== false && setTimeStamp(time);
  }, [selectedDate]);

  var isSignIn = 1;

  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };

  // occur a transaction to create sale order on marketplace for this parcel
  const handleCreateOrder = async () => {
    if (price === 0) {
      dispatch(
        showAlert({
          message: "You have to set price value to sell.",
          severity: "error",
        })
      );
      return;
    }
    let currenttime = new Date().getTime() / 1000;
    if (timeStamp <= currenttime) {
      dispatch(
        showAlert({
          message: "You have to select  correct expiration date.",
          severity: "error",
        })
      );
      return;
    }
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

    signer = generateSigner(window.ethereum);
    marketplaceContract = generateContractInstance(
      MarketplaceAddress,
      MarketplaceAbi,
      signer
    );
    spaceRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );

    let isApproved = false;
    isApproved = await isParcelApproved(MarketplaceAddress, tokensid);
    // check if this token is approved for marketplace contract
    if (!isApproved) {
      let approveMarketTx = await spaceRegistryContract.approve(
        MarketplaceAddress,
        tokensid
      );
      await approveMarketTx.wait();
      dispatch(
        showAlert({
          message:
            "Successfully approved. You have to confirm order creation transaction to finally publich your order.",
          severity: "success",
        })
      );
    }

    let createOrderTx = await marketplaceContract.createOrder(
      contractaddress,
      BigNumber.from(tokensid),
      ethers.utils.parseEther(price.toString()), // price in wei
      BigNumber.from(timeStamp.toString()) // expireAt to UTC timestamp
    );

    await createOrderTx.wait();

    dispatch(
      showAlert({
        message: "Sales order is successfully published.",
        severity: "success",
      })
    );
    window.location.href = "/account?section=parcels";
  };

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />
          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt="token"
                ></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("List for sale")}</div>
              <div className={classes.subtitle}>
                {t("Set a price and expiration date for your bid on")}{" "}
                <span>{t("Genesis Plaza")}</span>.
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("PRICE")}
                      </div>
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
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={handleCreateOrder}
                >
                  {t("List Sell")}
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
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default ParcelSell;
