import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LandMap from "../../components/MapData/LandMap";
import Title from "../../components/ContractInfo/Title";
import Owner from "../../components/ContractInfo/Owner";
import Highlight from "../../components/ContractInfo/Highlight";
import Bidbox from "../../components/ContractInfo/Bidbox";
import Buybox from "../../components/ContractInfo/Buybox";
import Sellbox from "../../components/ContractInfo/Sellbox";
import Parcels from "../../components/ContractInfo/Parcels";
import TopTab from "../../components/TopTab/TopTab";
import BidRecord from "../../components/ContractInfo/BidRecord";
import { transactionData } from "./ContractsData";
import { useStyles } from "./ContractsStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
import { saleParcels } from "../../store/saleparcels/selectors";
import { saleEstates } from "../../store/saleestates/selectors";
import { totalSpace } from "../../store/parcels/selectors";
import { ethers } from "ethers";
import {
  leftTime,
  dateConvert_untilDate,
  findCenterDot,
} from "../../common/utils";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../config/contracts/BidContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { SpaceProxyAddress } from "../../config/contracts/SpaceRegistryContract";
import { EstateProxyAddress } from "../../config/contracts/EstateRegitryContract";
import { getBidsByToken } from "../../hooks/api";
import { selectLoginAddress } from "../../store/auth/selectors";
import { limitCount } from "../../config/constant";
import { ShowMoreLessBtn } from "../../components/ShowMoreLessBtn/ShowMoreLessBtn";
declare var window: any;
var signer: any, bidContract: any;

const Contract = () => {
  const classes = useStyles();
  const loginAddress = useAppSelector(selectLoginAddress);
  const { contractaddress, tokensid } = useParams();
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();
  const [bidItems, setBidItems] = useState<any>();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [highDivLine, setHighDivLine] = useState(false);
  // --show btn logic start
  const [shown, setShown] = useState(false);
  const [showlessBtn, setShowlessBtn] = useState(false);
  const [showmoreBtn, setShowmoreBtn] = useState(true);
  const [showCount, setShowCount] = useState(0);
  // --show btn logic end

  //---------------------------Input value ------------------

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("0x");
  const [saleId, setSaleId] = useState("");
  const [salePrice, setSalePrice] = useState(0);
  const [selectSpace, setSelectSpace] = useState<any>();

  const parcelsOnSale: any = useAppSelector(saleParcels);
  const estatesOnSale: any = useAppSelector(saleEstates);
  const tiles: any = useAppSelector(totalSpace);

  useEffect(() => {
    setSalePrice(0);
    let estateArray: any = [];
    Object.keys(parcelsOnSale).forEach((index: any) => {
      const itemParcel = parcelsOnSale[index];
      if (itemParcel.assetId === tokensid) {
        setSaleId(itemParcel.assetId);
        setSalePrice(itemParcel.priceInWei);
      }
    });
    Object.keys(estatesOnSale).forEach((index: any) => {
      const itemEstate = estatesOnSale[index];
      if (itemEstate.assetId === tokensid) {
        setSaleId(itemEstate.assetId);
        setSalePrice(itemEstate.priceInWei);
      }
    });
    Object.keys(tiles).forEach((index: any) => {
      const allParcel = tiles[index];
      if (
        allParcel.tokenId === tokensid &&
        contractaddress === SpaceProxyAddress
      ) {
        setOwner(allParcel.owner);
        setName(t("Parcel"));
        estateArray.push({ x: allParcel.x, y: allParcel.y });
        if (allParcel.type === "road") {
          setName("Road");
          setDescription("");
        }
      }
      if (
        allParcel.estateId === tokensid &&
        contractaddress === EstateProxyAddress
      ) {
        const [estateName, estateDes] = allParcel?.name.split("^");
        setOwner(allParcel.owner);
        setName(estateName);
        setDescription(estateDes);
        estateArray.push({ x: allParcel.x, y: allParcel.y });

        if (allParcel.type === "plaza") {
          setName("Genesis Plaza");
          setDescription("");
        }
        if (allParcel.type === "road") {
          setName("Road");
          setDescription("");
        }
      }
    });

    if (estateArray?.length !== 0) {
      setX(findCenterDot(estateArray).x);
      setY(findCenterDot(estateArray).y);
    }
    setSelectSpace(estateArray);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parcelsOnSale, tiles, tokensid]);

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
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    getAllBids();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractaddress, tokensid]);

  const getAllBids = async () => {
    signer = generateSigner(window.ethereum);

    bidContract = generateContractInstance(
      BidContractAddress,
      BidContractAbi,
      signer
    );

    let bids = await getBidsByToken(contractaddress, tokensid);
    setBidItems(bids);
    if (bids?.length <= limitCount) {
      setShown(false);
      setShowCount(bids?.length);
    } else {
      setShown(true);
      if (showmoreBtn === true) {
        setShowCount(limitCount);
      } else if (showlessBtn === true) {
        setShowCount(bids?.length);
      }
    }
  };
  //pagination reate
  const [curPage, setCurPage] = useState<any>(1);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  var count = transactionData.length;
  var totalPage = Math.ceil(count / 5);

  const handleShowMoreBtn = () => {
    setShowmoreBtn(false);
    setShowlessBtn(true);
    setShowCount(bidItems?.length);
  };
  const handleShowLessBtn = () => {
    setShowmoreBtn(true);
    setShowlessBtn(false);
    setShowCount(limitCount);
  };
  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div>
            <div className={classes.LandMapContent}>
              <LandMap height={400} width={width} centerX={x} centerY={y} />
            </div>
            <div className={classes.backbtnContainer}>
              <BackButton className={classes.backBtnPosition} />
              <></>
            </div>
          </div>

          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              <div className={classes.items}>
                <Title
                  name={name}
                  des={description}
                  count={selectSpace?.length}
                />
              </div>
              {owner !== undefined && (
                <>
                  <div className={classes.divideLine}></div>
                  <Owner ownerAddress={owner} />
                </>
              )}
              <div
                className={
                  highDivLine === true ? classes.displayNone : classes.highLIght
                }
              >
                <div className={classes.divideLine}></div>
                <Highlight space={selectSpace} />
              </div>
            </div>
            <div className={classes.rightDescription}>
              <div className={classes.BuyboxContainer}>
                {loginAddress?.toUpperCase() === owner?.toUpperCase() ? (
                  <Sellbox price={ethers.utils.formatUnits(salePrice, 18)} />
                ) : saleId && saleId === tokensid ? (
                  <Buybox price={ethers.utils.formatUnits(salePrice, 18)} />
                ) : (
                  <Bidbox selectOwner={owner && owner} />
                )}
              </div>
            </div>
          </div>

          <Parcels parcels={selectSpace} />

          {/* <div className={classes.tableRoot}>
            <LatestSalesTable
              columns={headerData}
              rows={transactionData}
              curPage={curPage}
              stepIndex={0}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={handlepgnum}
                totalPage={totalPage}
              />
            </div>
          </div> */}
          <div>
            {bidItems?.length === 0 || bidItems === undefined ? (
              <></>
            ) : (
              <div>
                <div className={classes.BidsTitle}>{t("Bids")}</div>

                <div>
                  {bidItems?.slice(0, showCount).map((item: any, key: any) => {
                    // console.log("item", item);
                    return (
                      <BidRecord
                        key={key}
                        fromName={item[1]}
                        price={ethers.utils.formatUnits(item[2], 18)}
                        time={leftTime(item[3])}
                      />
                    );
                  })}
                </div>
                {shown && (
                  <>
                    <div
                      className={
                        showmoreBtn === true
                          ? classes.showmoreContent
                          : classes.displayNone
                      }
                    >
                      <ShowMoreLessBtn
                        letter={t("Show More")}
                        onClick={handleShowMoreBtn}
                      />
                    </div>
                    <div
                      className={
                        showlessBtn === true
                          ? classes.showmoreContent
                          : classes.displayNone
                      }
                    >
                      <ShowMoreLessBtn
                        letter={t("Show Less")}
                        onClick={handleShowLessBtn}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
