import { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./UpdateMetadataStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { showAlert } from "../../../../store/alert";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../../../config/contracts/EstateRegitryContract";
import { MarketplaceAddress } from "../../../../config/contracts/MarketPlaceContract";
import { getMetadata } from "../../../../../src/hooks/api";

declare var window: any;
const UpdateMetadata = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { estateid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [initLandname, setInitLandname] = useState("");
  const [initLanddesc, setInitLanddesc] = useState("");
  const [name, setName] = useState(initLandname);
  const [description, setDescription] = useState(initLanddesc);

  var isSignIn = 1;
  const initData = async () => {
    await getMetadata(estateid).then((res: any) => {
      let metaData = res.split("^");
      setInitLandname(metaData[0]);
      setInitLanddesc(metaData[1]);
    });
  };
  useEffect(() => {
    initData();
  }, []);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmitBtn = async () => {
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
    if (description === "") {
      dispatch(
        showAlert({
          message: "You have to write your estate description.",
          severity: "error",
        })
      );
      return;
    }
    if (name === "") {
      dispatch(
        showAlert({
          message: "You have to write your estate name.",
          severity: "error",
        })
      );
      return;
    }
    var metaData = name + "^" + description;
    var signer = generateSigner(window.ethereum);
    var estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    if (
      estateRegistryContract.getApproved(estateid) !== MarketplaceAddress &&
      estateRegistryContract.isApprovedForAll(loginAddress, estateid) === false
    ) {
      let approveMarketTx = await estateRegistryContract.approve(
        MarketplaceAddress,
        estateid
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
    let updateMetaDataTx = await estateRegistryContract.updateMetadata(
      estateid,
      metaData
    );
    await updateMetaDataTx.wait();
    dispatch(
      showAlert({
        message: "Successfully updated metadata.",
        severity: "success",
      })
    );
    window.location.href = "/account?section=estates";
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
              <div className={classes.title}>{t("Update Metadata")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <div className={classes.subheader_label}>{t("Name")}</div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={initLandname}
                      onChange={(e) => handleNameChange(e)}
                    />
                  </FormControl>
                  <div className={classes.subheader_label}>
                    {t("Description")}
                  </div>
                  <TextareaAutosize
                    className={classes.descriptionTextField}
                    aria-label="maximum height"
                    placeholder={initLanddesc}
                    onChange={(e) => handleDescriptionChange(e)}
                  />
                </div>
                <p>&nbsp;</p>
              </div>
              <div className={classes.buttons}>
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={handleSubmitBtn}
                >
                  {t("SUBMIT")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate("/account/estate/create")}
                >
                  {t("CANCEL")}
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

export default UpdateMetadata;
