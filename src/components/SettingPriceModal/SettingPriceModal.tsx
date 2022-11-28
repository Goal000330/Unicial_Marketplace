import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  useStyles,
  StyledInput,
  StyledTooltip,
} from "./SettingPriceModalStyle";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import PaytypeBtn from "../Base/PaytypeBtn";
import YellowBtn from "./../../components/Base/YellowBtn";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import whiteTokenIcon from "./../../assets/svg/whiteToken.png";
import InfoIcon from "../../assets/svg/Info.png";
import makeBlockie from "ethereum-blockies-base64";
import RoundBackBtn from "../Base/RoundBackBtn";
import { ethers } from "ethers";
import { showAlert } from "../../store/alert";
import { tooltopData } from "./../../config/constant";
interface Props {
  show: boolean;
  onClose: () => void;
}

export default function SettingPriceModal({ show, onClose }: Props) {
  const address = "0x8734CB972d36a740Cc983d5515e160C373A4a016";
  const emptyaddress = "0x00000000000000000000000000000";
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const [price, setPrice] = useState("");
  const [beneficiary, setBeneficiary] = useState("");

  const [nonefreeStatus, setNonefreeStatus] = useState(true);
  const [freeStatus, setFreeStatus] = useState(false);

  const [submitBtnStatus, setSubmitBtnStatus] = useState(false);
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const handleNonefreeBtn = () => {
    setNonefreeStatus(!nonefreeStatus);
    setFreeStatus(false);
  };
  const handleFreeBtn = () => {
    setFreeStatus(!freeStatus);
    setNonefreeStatus(false);
  };
  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };
  const handleBeneficiary = (e: any) => {
    setBeneficiary(e.target.value);
  };

  const testAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (isCorrectAddress === false) {
      dispatch(
        showAlert({
          message: "Invaild address",
          severity: "error",
        })
      );
    }
  };

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);
  useEffect(() => {
    if (freeStatus === true) {
      setIsCorrectAddress(true);
    } else {
      let result = testAddress(beneficiary);
      result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
    }
  }, [beneficiary]);

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  useEffect(() => {
    if (freeStatus === true) {
      setSubmitBtnStatus(true);
      return;
    } else if (price === "" || beneficiary === "") {
      setSubmitBtnStatus(false);
      return;
    } else {
      setSubmitBtnStatus(true);
      return;
    }
  }, [price, beneficiary]);

  useEffect(() => {
    if (nonefreeStatus === true) {
      setBeneficiary(address);
    } else {
      setBeneficiary("");
    }
  }, [freeStatus, nonefreeStatus]);
  let status = 1;
  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        {status === 1 ? (
          <div className={classes.modalRoot}>
            <RoundBackBtn
              className={classes.backIcon}
              type="multiply"
              onBack={onClose}
            />
            <div className={classes.title}>
              Set price and address for "OrionNFT"
            </div>
            <div className={classes.mainContainer}>
              <div className={classes.payTypeContainer}>
                {nonefreeStatus === true ? (
                  <PaytypeBtn
                    letter="I am the beneficiary"
                    actived
                    className={classes.nonefreeBtn}
                    onClick={() => {
                      handleNonefreeBtn();
                    }}
                  />
                ) : (
                  <PaytypeBtn
                    letter="I am the beneficiary"
                    className={classes.nonefreeBtn}
                    onClick={handleNonefreeBtn}
                  />
                )}
                {freeStatus === true ? (
                  <PaytypeBtn
                    letter="Make it free"
                    actived
                    onClick={handleFreeBtn}
                  />
                ) : (
                  <PaytypeBtn letter="Make it free" onClick={handleFreeBtn} />
                )}
              </div>
              {nonefreeStatus === false && freeStatus === false ? (
                <>
                  <div className={classes.titleLetter}>PRICE</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      type="number"
                      placeholder="100"
                      onChange={(e) => handlePrice(e)}
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    BENEFICIARY{" "}
                    <StyledTooltip
                      interactive
                      arrow
                      title={tooltopData}
                      placement="top"
                    >
                      <img src={InfoIcon} className={classes.infoIcon} />
                    </StyledTooltip>
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="0x"
                      value={beneficiary}
                      onChange={(e) => handleBeneficiary(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(address)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              ) : nonefreeStatus === true && freeStatus === false ? (
                <>
                  <div className={classes.titleLetter}>PRICE</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      type="number"
                      placeholder="100"
                      onChange={(e) => handlePrice(e)}
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    BENEFICIARY{" "}
                    <StyledTooltip
                      interactive
                      arrow
                      title={tooltopData}
                      placement="top"
                    >
                      <img src={InfoIcon} className={classes.infoIcon} />
                    </StyledTooltip>
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="0x"
                      value={beneficiary}
                      onChange={(e) => handleBeneficiary(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(address)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              ) : (
                <>
                  <div className={classes.titleLetter}>PRICE</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      type="number"
                      onChange={(e) => handlePrice(e)}
                      placeholder="0"
                      disabled
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                          <span className={classes.freePlaceholderLetter}>
                            0
                          </span>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    BENEFICIARY{" "}
                    <StyledTooltip
                      interactive
                      arrow
                      title={tooltopData}
                      placement="top"
                    >
                      <img src={InfoIcon} className={classes.infoIcon} />
                    </StyledTooltip>
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      type="number"
                      onChange={(e) => handleBeneficiary(e)}
                      placeholder={emptyaddress}
                      disabled
                      value={beneficiary}
                      className={classes.disablecursor}
                      startAdornment={
                        <InputAdornment position="start">
                          <span
                            className={clsx(
                              classes.freePlaceholderLetter,
                              classes.noneMarginLeft
                            )}
                          >
                            {emptyaddress}
                          </span>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(emptyaddress)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              )}
              {submitBtnStatus === false ? (
                <YellowBtn
                  disabled
                  letter="Submit"
                  className={classes.subBtn}
                />
              ) : (
                <YellowBtn
                  letter="Submit"
                  className={classes.subBtn}
                  onClick={handleSubmit}
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    </>
  );
}
