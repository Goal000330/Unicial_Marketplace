import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NeedSignIn from "../NeedSignIn";
import ActionButton from "../../components/Base/ActionButton";
import normalshapeSvg from "../../assets/svg/normalshape.svg";
import CallMadeIcon from "@material-ui/icons/CallMade";

import { useStyles } from "./BuyStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { saleParcels } from "../../store/saleparcels/selectors";
import { selectLoginAddress } from "../../store/auth/selectors";
import { showAlert } from "../../store/alert";

import { ethers, BigNumber } from "ethers";
import {
  MarketplaceAddress,
  MarketplaceAbi,
} from "../../config/contracts/MarketPlaceContract";
import {
  UccContractAbi,
  UccContractAddress,
} from "../../config/contracts/UnicialCashToken";
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { SpaceProxyAddress } from "../../config/contracts/SpaceRegistryContract";
import { EstateProxyAddress } from "../../config/contracts/EstateRegitryContract";
import { totalSpace } from "../../store/parcels/selectors";
import SliceMap from "../../components/SliceMap";

declare var window: any;
var signer: any, marketplaceContract: any, uccContract: any;
const uccApprovalAmount = BigNumber.from(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
);
const Buy = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const saleSpaces: any = useAppSelector(saleParcels);
  const loginAddress: any = useAppSelector(selectLoginAddress);
  const { contractaddress, tokensid } = useParams();
  const [price, setPrice] = useState("");
  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0));
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const tiles: any = useAppSelector(totalSpace);

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

  const handleBuy = async () => {
    try {
      if (!uccAllowance.gt(BigNumber.from(0))) {
        dispatch(
          showAlert({
            message:
              "You have to first approve the marketplace contract to operate your asset.",
            severity: "error",
          })
        );
        // generate approve tx and wait until tx finihes
        let uccApproveTx = await uccContract.approve(
          MarketplaceAddress,
          uccApprovalAmount
        );
        await uccApproveTx.wait();
      }
      let allowance = await uccContract.allowance(
        loginAddress,
        MarketplaceAddress
      );
      setUccAllowance(allowance);
      let buyTx = await marketplaceContract.executeOrder(
        contractaddress,
        BigNumber.from(tokensid),
        ethers.utils.parseUnits(price)
      );
      await buyTx.wait();
      dispatch(
        showAlert({
          message: "Sales order is successfully published.",
          severity: "success",
        })
      );
      navigate("/account");
    } catch (err: any) {
      dispatch(
        showAlert({
          message: "Failed to buy parcel",
          severity: "error",
        })
      );
    }
  };

  const initContractSetting = async () => {
    signer = generateSigner(window.ethereum);
    marketplaceContract = generateContractInstance(
      MarketplaceAddress,
      MarketplaceAbi,
      signer
    );
    uccContract = generateContractInstance(
      UccContractAddress,
      UccContractAbi,
      signer
    );

    let allowance = await uccContract.allowance(
      loginAddress,
      MarketplaceAddress
    );
    setUccAllowance(allowance);
  };

  useEffect(() => {
    Object.keys(saleSpaces).forEach((index: any) => {
      const saleParcel = saleSpaces[index];
      if (
        saleParcel.assetId === tokensid &&
        saleParcel.nftAddress === contractaddress
      ) {
        let priceParcel = ethers.utils.formatUnits(saleParcel.priceInWei, 18);
        setPrice(priceParcel.toString().slice(0, -2));
      }
    });
  }, [saleSpaces]);

  useEffect(() => {
    initContractSetting();
  }, []);

  return (
    <>
      {loginAddress ? (
        <div className={classes.root}>
          <div className={classes.root_container}>
            <BackButton className={classes.backBtn} />
            <div className={classes.bidCard}>
              <div className={classes.leftCard}>
                <div className={classes.imgContent}>
                  <SliceMap centerX={x} centerY={y} />
                </div>
              </div>

              <div className={classes.rightCard}>
                <div className={classes.title}>{t("Buy Parcel")}</div>
                <div className={classes.subtitle}>
                  {t("You don't have enough UCC to buy Hanzo-Gate1 for")}
                  <img src={normalshapeSvg} className={classes.symbol} />
                  <b className={classes.subtitleNumber}>
                    {" "}
                    {ethers.utils.commify(price)}.
                  </b>
                </div>

                {/* buttons */}
                <div className={classes.buttons}>
                  <ActionButton
                    color="light"
                    className={classes.bidchange}
                    onClick={handleBuy}
                  >
                    {t("Buy")}
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
      ) : (
        <NeedSignIn />
      )}
    </>
  );
};

export default Buy;
