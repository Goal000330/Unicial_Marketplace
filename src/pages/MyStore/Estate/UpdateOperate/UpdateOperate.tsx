import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./UpdateOperateStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";
import { selectLoginAddress } from "./../../../../store/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { showAlert } from "../../../../store/alert";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  EstateRegistryAbi,
  EstateProxyAddress,
} from "../../../../config/contracts/EstateRegitryContract";
import { MarketplaceAddress } from "../../../../config/contracts/MarketPlaceContract";

declare var window: any;

var signer: any, estateRegistryContract: any;
const UpdateOperator = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { estateid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const [transferAddress, setTransferAddress] = useState("");
  const isAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };

  var isSignIn = 1;

  useEffect(() => {
    let result = isAddress(transferAddress);
    result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
  }, [transferAddress]);
  const handleChange = (e: any) => {
    setTransferAddress(e.target.value);
  };
  const handleSubmit = async () => {
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

      let updateOperateTx = await estateRegistryContract.setUpdateOperator(
        estateid,
        transferAddress.toLowerCase()
      );
      await updateOperateTx.wait();
      dispatch(
        showAlert({
          message: "Successully updated.",
          severity: "success",
        })
      );
      window.location.href = "/account?section=estates";
    }
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
              <div className={classes.title}>{t("Update Operate")}</div>
              <div className={classes.subtitle}>
                {t("Your are not the owner of Roads.")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={12} sm={12} xs={12} item>
                      <div className={classes.subheader_label}>
                        {t("RECEPIENT ADDRESS")}
                      </div>
                      <FormControl>
                        <StyledInput placeholder="0x" onChange={handleChange} />
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
                    onClick={handleSubmit}
                  >
                    {t("Submit")} &nbsp;
                    <img src={raiseicon} alt="raiseicon" />
                  </ActionButton>
                ) : (
                  <ActionButton
                    disabled
                    color="light"
                    className={classes.bidchange}
                  >
                    {t("Submit")} &nbsp;
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

export default UpdateOperator;
