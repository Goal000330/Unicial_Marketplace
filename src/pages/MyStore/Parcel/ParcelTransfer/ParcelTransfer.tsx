import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import { BigNumber, ethers } from "ethers";

import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./ParcelTransferStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { selectLoginAddress } from "../../../../store/auth/selectors";
import { showAlert } from "../../../../store/alert";
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

declare var window: any;
var signer: any, spaceRegistryContract: any, marketplaceContract: any;

const ParcelTransfer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [transferAddress, setTransferAddress] = useState("");
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const { tokensid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);

  const isAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleTransferOrder = async () => {
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

      spaceRegistryContract = generateContractInstance(
        SpaceProxyAddress,
        SpaceRegistryAbi,
        signer
      );

      marketplaceContract = generateContractInstance(
        MarketplaceAddress,
        MarketplaceAbi,
        signer
      );

      let transferTx = await spaceRegistryContract[
        "safeTransferFrom(address,address,uint256)"
      ](loginAddress, transferAddress, BigNumber.from(tokensid));
      await transferTx.wait();
      dispatch(
        showAlert({
          message: "Transfer order is successfully published.",
          severity: "success",
        })
      );
      window.location.href = "/account?section=parcels";
    }
  };

  var isSignIn = 1;

  const handleChange = (e: any) => {
    setTransferAddress(e.target.value);
  };
  useEffect(() => {
    let result = isAddress(transferAddress);
    result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
  }, [transferAddress]);
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
              <div className={classes.title}>{t("Transfer Parcels")}</div>
              <div className={classes.subtitle}>
                {t("You are not the owner of Roads.")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={12} sm={12} xs={12} item>
                      <div className={classes.subheader_label}>
                        {t("RECEPIENT ADDRESS")}
                      </div>
                      <FormControl>
                        <StyledInput
                          placeholder="0x"
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                {isCorrectAddress === true ? (
                  <ActionButton
                    color="light"
                    className={classes.bidchange}
                    onClick={handleTransferOrder}
                  >
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt="raiseicon" />
                  </ActionButton>
                ) : (
                  <ActionButton
                    disabled
                    color="light"
                    className={classes.bidchange}
                  >
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt="raiseicon" />
                  </ActionButton>
                )}
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

export default ParcelTransfer;
