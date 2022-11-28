import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useStyles } from "./EstateDetailStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { dateConvert } from "../../../../common/utils";
import { getBidsByToken, getEstatesByOwner } from "../../../../hooks/api";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { ShowMoreLessBtn } from "../../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { showMoreCount } from "../../../../config/constant";
import { useAppSelector } from "../../../../store/hooks";
import BidRecord from "../../../../components/ContractInfo/BidRecord";
import { ethers } from "ethers";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../../../config/contracts/EstateRegitryContract";
import { totalSpace } from "../../../../store/parcels/selectors";
import Parcels from "../../../../components/ContractInfo/Parcels";
import { getMetadata } from "../../../../hooks/api";
import { StyledTooltip } from "../../../../components/Mystore/LandCard/LandCardStyle";

var signer: any, estateRegistryContract: any;
declare var window: any;

const EstateDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const emptyTokens: any[] = [];
  const loginAddress = useAppSelector(selectLoginAddress);
  const { contractaddress, estateid } = useParams();
  const [ownEstates, setOwnEstates] = useState(emptyTokens);
  const [count, setCount] = useState(showMoreCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);
  const [bidItems, setBidItems] = useState<any>();
  const [currentOperator, setCurrentOperator] = useState("");
  const [estateSize, setEstatesize] = useState(0);
  const tiles: any = useAppSelector(totalSpace);
  const [selectSpace, setSelectSpace] = useState<any>();
  const [landName, setLandName] = useState("");
  const [landDesc, setLandDesc] = useState("");

  useEffect(() => {
    getEstatesByOwner(loginAddress).then((parcels: any[]) => {
      setOwnEstates(parcels);
      if (parcels && parcels?.length <= showMoreCount) {
        setShowMoreBtn(false);
      }
    });
    getBidsByToken(contractaddress, estateid).then((bids) => {
      setBidItems(bids);
      if (bids && bids?.length <= showMoreCount) {
        setShowMoreBtn(false);
        setShowLessBtn(false);
      }
    });
  }, [loginAddress]);

  const handleShowBtn = () => {
    setCount(count + showMoreCount);
    if (ownEstates && count >= ownEstates?.length) {
      setShowMoreBtn(false);
    }
  };

  const handleShowLessBtn = () => {
    setCount(showMoreCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };

  const getMedataInfo = async () => {
    var id = Number(estateid);
    await getMetadata(id).then((res: any) => {
      let metaData = res.split("^");
      setLandName(metaData[0]);
      setLandDesc(metaData[1]);
    });
  };

  const init = async () => {
    signer = generateSigner(window.ethereum);
    estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let currentOperator = await estateRegistryContract.updateOperator(estateid);
    if (currentOperator !== "0x0000000000000000000000000000000000000000") {
      setCurrentOperator(currentOperator);
    } else {
      setCurrentOperator("0x");
    }
  };

  useEffect(() => {
    let count = 0;
    Object.keys(tiles).forEach((index: any) => {
      const allParcel = tiles[index];
      if (
        allParcel.estateId &&
        allParcel.estateId.toString() === estateid?.toString()
      ) {
        count++;
        setEstatesize(count);
      }
    });
    let estateArray: any = [];
    Object.keys(tiles).forEach((index: any) => {
      const allParcel = tiles[index];
      if (
        allParcel.estateId === estateid &&
        contractaddress === EstateProxyAddress
      ) {
        estateArray.push({ x: allParcel.x, y: allParcel.y });
      }
    });
    setSelectSpace(estateArray);
  }, [tiles]);

  useEffect(() => {
    init();
    getMedataInfo();
  }, []);
  return (
    <div className={classes.root}>
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
            <div className={classes.infoNameContainer}>{landName}</div>
            <div className={classes.infoDescContainer}>{landDesc}</div>

            <div className={classes.form_field}>
              <div className={classes.price_container}>
                <Grid container>
                  <Grid md={6} sm={12} xs={12} item>
                    <div className={classes.subheader_label}>
                      {t("Operator")}:
                      <StyledTooltip
                        title={currentOperator}
                        interactive
                        arrow
                        placement="top"
                      >
                        <span className={classes.operatorValue}>
                          {currentOperator.slice(0, 7)}
                        </span>
                      </StyledTooltip>
                    </div>
                  </Grid>
                  <Grid md={6} sm={12} xs={12} item>
                    <div className={classes.subheader_label}>
                      {t("Estate Size")}:
                      <span className={classes.operatorValue}>
                        {estateSize}
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className={classes.entireEstate}>
          <div className={classes.entireLabel}>{t("Entire Estate")}</div>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_sell`
                  )
                }
              >
                {t("Sell")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_transfer`
                  )
                }
              >
                {t("Transfer")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_edit`
                  )
                }
              >
                {t("Add space")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_updatemetadata`
                  )
                }
              >
                {t("Update Metadata")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_updateoperate`
                  )
                }
              >
                {t("Update Operate")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.entireEstate}>
          <div className={classes.entireLabel}>{t("Partial Estate")}</div>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/transfer_spaces`
                  )
                }
              >
                {t("Transfer Spaces")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/set_spaceOperator`
                  )
                }
              >
                {t("Space Operator")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/selectSpace_forUpdatelanddata`
                  )
                }
              >
                {t("Update LandData")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
          </Grid>
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
        <div className={classes.bidDetail}>
          <Parcels parcels={selectSpace} />
        </div>
      </div>
    </div>
  );
};

export default EstateDetail;
