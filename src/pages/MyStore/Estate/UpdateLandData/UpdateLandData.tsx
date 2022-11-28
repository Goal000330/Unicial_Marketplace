import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./UpdateLandDataStyle";
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
import { selectestates } from "../../../../store/selectedestates/selectors";
import { getCoords } from "../../../../common/utils";
import { totalSpace } from "../../../../store/parcels/selectors";

import { BigNumber } from "ethers";

declare var window: any;
const UpdateLandData = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { estateid } = useParams();
  const estates = useAppSelector(selectestates);
  const loginAddress = useAppSelector(selectLoginAddress);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [landmetadata, setLandMetaData] = useState("");
  const tiles: any = useAppSelector(totalSpace);

  var isSignIn = 1;
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
    let landdata = name + "^" + description;
    setLandMetaData(landdata);
    var tokenIds = [];
    var signer = generateSigner(window.ethereum);
    var estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    for (let i = 0; i < estates.length; i++) {
      var splitted = estates[i].split(",");
      var a =
        tiles[getCoords(parseInt(splitted[0]), parseInt(splitted[1]))].tokenId;
      tokenIds.push(BigNumber.from(a));
    }
    let updateLandDataTx = await estateRegistryContract.updateManySpaceData(
      estateid,
      tokenIds,
      landmetadata
    );
    await updateLandDataTx.wait();
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
              <div className={classes.title}>{t("Update Land Data")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <div className={classes.subheader_label}>{t("Name")}</div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={t("Decentraland")}
                      onChange={(e) => handleNameChange(e)}
                    />
                  </FormControl>
                  <div className={classes.subheader_label}>
                    {t("Description")}
                  </div>
                  <TextareaAutosize
                    className={classes.descriptionTextField}
                    aria-label="maximum height"
                    placeholder={t("This is an estate")}
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

export default UpdateLandData;
