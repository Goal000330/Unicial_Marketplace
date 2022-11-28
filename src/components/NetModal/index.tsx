import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ActionButton from "../Base/ActionButton";
import { bigbugAlertStatus } from "../../store/netmodal/selectors";
import { useTranslation } from "react-i18next";
import { nanoid } from "nanoid";
import { ethers } from "ethers";
import { CHAIN_INFO } from "../../config/constant";
import { setloginAddress } from "../../store/auth";
import { useNavigate } from "react-router";
import { showNetModal } from "../../store/netmodal";
import { showAlert } from "../../store/alert";

const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  bigbugRoot: {
    padding: "30px",
    position: "fixed",
    flexDirection: "column",
    width: "538px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 99999,
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  bigbugLabel: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.02em",
    color: "white",
    fontFamily: "Montserrat",
  },
  bigbugDescription: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "20px",
    color: "#96A1DB",
    fontFamily: "Lato",
    marginTop: "20px",
  },
  mainnet: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "20px",
    color: "#FFFFFF",
    fontFamily: "Lato",
    marginTop: "20px",
  },
  bidchange: {
    minWidth: "160px",
    width: "100%",
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
}));

declare var window: any;
var provider: any;
var signer: any;

const generateSignature = () => {
  let currentTimestamp: string = Math.floor(
    new Date().getTime() / 1000
  ).toString();
  let rndString: string = nanoid();
  let signature: string =
    "Unicial: Verify your signin:\n\n" +
    "  - Current UTC timestamp: " +
    currentTimestamp +
    "\n" +
    "  - Signature: " +
    rndString;

  return signature;
};

export default function NetModal() {
  const classes = useStyles();
  const showBigbug = useAppSelector(bigbugAlertStatus);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  var loginAddress: string;

  const getLoginAddress = async (signer: any, msgToSign: string) => {
    let signature = await signer.signMessage(msgToSign);

    // Make sure you arrayify the message if you want the bytes to be used as the message
    const recoveredAddress = ethers.utils.verifyMessage(msgToSign, signature);

    dispatch(setloginAddress(recoveredAddress));
    dispatch(showNetModal(false));
    navigate("/account?section=collections");
    return recoveredAddress;
  };

  const handleSignIn = async () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
    } else {
      dispatch(
        showAlert({
          message:
            "Metamask seem to be not installed. Please install metamask first and try again.",
          severity: "error",
        })
      );
    }

    // get current network id
    const { chainId } = await provider.getNetwork();
    let znxChainId: number = parseInt(CHAIN_INFO.TESTNET.chainId, 16);

    // check current chain id is equal to Zilionixx Mainnet
    if (chainId === znxChainId) {
      loginAddress = await getLoginAddress(signer, generateSignature());
      // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
      dispatch(
        showAlert({
          message: `Recovered address: ${loginAddress.slice(0, 6)}`,
          severity: "success",
        })
      );
    } else {
      let ethereum = window.ethereum;
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: CHAIN_INFO.TESTNET.chainId }],
        });

        // switch provider and signer to zilionixx network
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        loginAddress = await getLoginAddress(signer, generateSignature());
        // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
        dispatch(
          showAlert({
            message: `Switched chain done & Recovered address: ${loginAddress.slice(
              0,
              6
            )}`,
            severity: "success",
          })
        );
      } catch (switchError: any) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: CHAIN_INFO.TESTNET.chainId,
                  chainName: CHAIN_INFO.TESTNET.chainName,
                  rpcUrls: CHAIN_INFO.TESTNET.rpcUrls /* ... */,
                },
              ],
            });

            // switch provider and signer to zilionixx network
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            loginAddress = await getLoginAddress(signer, generateSignature());
            // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
            dispatch(
              showAlert({
                message: `Add chain done & Recovered address: ${loginAddress.slice(
                  0,
                  6
                )}`,
                severity: "success",
              })
            );
          } catch (addError) {
            // handle "add" error
            dispatch(
              showAlert({
                message:
                  "Can not add Zilionixx network. Please add Zilionixx network.",
                severity: "error",
              })
            );
          }
        }
        // handle other "switch" errors
      }
    }
  };

  return (
    <>
      <div
        className={
          showBigbug === true ? classes.loaderWrapper : classes.displayNone
        }
      >
        <div className={classes.bigbugRoot}>
          <div className={classes.bigbugLabel}>{t("Wrong Network")} !</div>
          <div className={classes.bigbugDescription}>
            {t("You need to be connected to")}{" "}
            <span className={classes.mainnet}>{t("Zilionixx Mainnet")}</span>
            &nbsp; &nbsp;
            {t("to use this app, please switch your network to continue")}.
          </div>
          <ActionButton
            color="light"
            className={classes.bidchange}
            onClick={handleSignIn}
          >
            {t("SWITCH TO Zilionixx MAINNET")}
          </ActionButton>
        </div>
      </div>
    </>
  );
}
