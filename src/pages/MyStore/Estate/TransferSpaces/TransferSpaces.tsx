import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { TransferSpacesStyle } from "./TransferSpacesStyle";
import {
  useStyles,
  StyledInput,
} from "./../EstateTransfer/EstateTransferStyle";
import { FormControl, Grid } from "@material-ui/core";
import SelectSpaceMap from "../../../../components/MapData/SelectSpaceMap/SelectSpaceMap";
import ParcelCard from "../../../../components/ParcelCard/ParcelCard";

import TopTab from "../../../../components/TopTab/TopTab";
import ActionButton from "../../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../../components/BackButton/BackButton";

import { selectestates } from "../../../../store/selectedestates/selectors";
import { selectparcels } from "../../../../store/selectedparcels/selectors";
import { getestates } from "../../../../store/selectedestates";
import { showAlert } from "../../../../store/alert";

import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { getCoords } from "../../../../common/utils";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { BigNumber, ethers } from "ethers";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { totalSpace } from "../../../../store/parcels/selectors";
import {
  EstateRegistryAbi,
  EstateProxyAddress,
} from "../../../../config/contracts/EstateRegitryContract";
import { MarketplaceAddress } from "../../../../config/contracts/MarketPlaceContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import { TileMap } from "react-tile-map";

declare var window: any;
var signer: any, estateRegistryContract: any;
export default function TransferSpaces() {
  const classes = TransferSpacesStyle();
  const classes2 = useStyles();
  const { estateid } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginAddress = useAppSelector(selectLoginAddress);
  const estates = useAppSelector(selectestates);
  const tiles: any = useAppSelector(totalSpace);
  const selectedTile = useAppSelector(selectparcels);
  const { t } = useTranslation();

  const [transferAddress, setTransferAddress] = useState("");
  const [width, setWidth] = useState(0);
  //from estatetransfer
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const isAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };
  const handleChange = (e: any) => {
    setTransferAddress(e.target.value);
  };
  useEffect(() => {
    let result = isAddress(transferAddress);
    result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
  }, [transferAddress]);

  const handleTransferOrder = async () => {
    var tokenIds = [];
    if (loginAddress === transferAddress.toLowerCase()) {
      dispatch(
        showAlert({
          message:
            "You have to input correct recepient address. It is your login address",
          severity: "error",
        })
      );
    } else {
      signer = generateSigner(window.ethereum);
      estateRegistryContract = generateContractInstance(
        EstateProxyAddress,
        EstateRegistryAbi,
        signer
      );

      for (let i = 0; i < estates.length; i++) {
        var splitted = estates[i].split(",");
        var a =
          tiles[getCoords(parseInt(splitted[0]), parseInt(splitted[1]))]
            .tokenId;
        tokenIds.push(BigNumber.from(a));
      }
      let transferSpaceTx = await estateRegistryContract.transferManySpaces(
        estateid,
        tokenIds,
        transferAddress
      );
      await transferSpaceTx.wait();
      dispatch(
        showAlert({
          message: "Transfer order is successfully published.",
          severity: "success",
        })
      );
      window.location.href = "/account?section=estates";
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  const handleClear = () => {
    dispatch(getestates([]));
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TopTab />

      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <SelectSpaceMap
              height={400}
              width={width}
              initialX={1}
              initialY={1}
            />
          </div>
        </div>
        <div className={classes.btnPart}>
          <BackButton className={classes.backButton} />
          <ActionButton
            color="light"
            className={classes.clearBtn}
            onClick={handleClear}
          >
            {t("Clear")}
            <CallMadeIcon fontSize="small" />
          </ActionButton>
        </div>
        {/* from EstateTransfer */}
        <div className={classes.transferFormRoot}>
          <div className={classes2.title}>{t("Transfer Spaces")}</div>
          <div className={classes2.subtitle}>
            {t("Your are not the owner of Roads.")}
          </div>
          <div className={classes2.form_field}>
            <div className={classes2.price_container}>
              <Grid container>
                <Grid md={12} sm={12} xs={12} item>
                  <div className={classes2.subheader_label}>
                    {t("RECEPIENT ADDRESS")}
                  </div>
                  <div className={classes.formContainer}>
                    <FormControl>
                      <StyledInput placeholder="0x" onChange={handleChange} />
                    </FormControl>
                    {/* buttons */}
                    <div className={classes.buttons}>
                      {isCorrectAddress === true ? (
                        <ActionButton
                          color="light"
                          className={classes2.bidchange}
                          onClick={handleTransferOrder}
                        >
                          {t("Transfer")} &nbsp;
                          <img src={raiseicon} alt="raiseicon" />
                        </ActionButton>
                      ) : (
                        <ActionButton
                          disabled
                          color="light"
                          className={classes2.bidchange}
                        >
                          {t("Transfer")} &nbsp;
                          <img src={raiseicon} alt="raiseicon" />
                        </ActionButton>
                      )}
                      <ActionButton
                        color="dark"
                        className={classes2.cancelchange}
                        onClick={() => navigate(-1)}
                      >
                        {t("Cancel")}
                      </ActionButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <p>&nbsp;</p>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t(
              "Select the spaces of your estate on the map to transfer them to others."
            )}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              {estates.map((items: any, key: any) => {
                return (
                  <Grid key={key} item xs={6} sm={4} md={2}>
                    <ParcelCard
                      cardlabel="Parcel"
                      carddescription="Acquired at August 2nd, 2018"
                      location={items}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
