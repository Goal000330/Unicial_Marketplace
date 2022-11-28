import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useParams } from "react-router-dom";
import { useStyles } from "./ParcelDetailStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import {
  getBidsByToken,
  getParcelsByOwnerAsCoords,
} from "../../../../hooks/api";
import { dateConvert } from "../../../../common/utils";
import { ShowMoreLessBtn } from "../../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { showMoreCount } from "../../../../config/constant";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import BidRecord from "../../../../components/ContractInfo/BidRecord";
import { BigNumber, ethers } from "ethers";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  MarketplaceAbi,
  MarketplaceAddress,
} from "../../../../config/contracts/MarketPlaceContract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";
import { showAlert } from "../../../../store/alert";

declare var window: any;
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const ParcelDetail = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const emptyTokens: any[] = [];
  const loginAddress = useAppSelector(selectLoginAddress);
  const { contractaddress, tokensid } = useParams();
  const [ownParcels, setOwnParcels] = useState(emptyTokens);
  const [count, setCount] = useState(showMoreCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);
  const [bidItems, setBidItems] = useState<any>();

  useEffect(() => {
    getParcelsByOwnerAsCoords(loginAddress).then((parcels) => {
      setOwnParcels(parcels);
    });
    getBidsByToken(contractaddress, tokensid).then((bids) => {
      setBidItems(bids);
      if (bids && bids?.length <= showMoreCount) {
        setShowMoreBtn(false);
        setShowLessBtn(false);
      }
    });
  }, [loginAddress]);

  const handleShowBtn = () => {
    setCount(count + showMoreCount);
    if (ownParcels && count >= ownParcels?.length) {
      setShowMoreBtn(false);
      setShowLessBtn(true);
    }
  };

  const handleShowLessBtn = () => {
    setCount(showMoreCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };

  const handleCancelOrder = async () => {
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
    // check if this token is approved for marketplace contract
    let cancelOrderTx = await marketplaceContract.cancelOrder(
      contractaddress,
      BigNumber.from(tokensid)
    );
    await cancelOrderTx.wait();
    dispatch(
      showAlert({
        message: "Sales order cancel is successfully published.",
        severity: "success",
      })
    );
    window.location.href = "/account?section=parcels";
  };

  return (
    <div className={classes.root}>
      <div className={classes.root_container}>
        <BackButton className={classes.backBtn} />
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
            <div className={classes.title}>{t("Parcel detail")}</div>
            <div className={classes.buttons}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }
              >
                {t("Sell")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/transfer`
                  )
                }
              >
                {t("Transfer")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="dark"
                className={classes.cancelchange}
                onClick={handleCancelOrder}
              >
                {t("Cancel Order")}
              </ActionButton>
            </div>
          </div>
        </div>
        <div className={classes.bidDetail}>
          <div
            className={
              bidItems?.length === 0 || bidItems === undefined
                ? classes.displayNone
                : ""
            }
          >
            <div className={classes.bidsTitle}>{t("Bids")}</div>
            {bidItems?.map((row: any, index: any) => (
              <BidRecord
                key={index}
                fromName={row[1]?.slice(0, 6)}
                price={ethers.utils.formatUnits(row[2], 18)}
                time={dateConvert(row[3])}
              />
            ))}
            <div
              className={
                showMoreBtn === true
                  ? classes.showmoreContent
                  : classes.displayNone
              }
            >
              <ShowMoreLessBtn
                letter={t("Show More")}
                onClick={handleShowBtn}
              />
            </div>
            <div
              className={
                showLessBtn === true
                  ? classes.showmoreContent
                  : classes.displayNone
              }
            >
              <ShowMoreLessBtn
                letter={t("Show Less")}
                onClick={handleShowLessBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
