import { useEffect, useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReceiveBidTable from "./ReceiveBidTable/ReceiveBidTable";
import TablePagination from "../../Base/TablePagination";
import {
  headerSendData,
  headerReceiveData,
  onePageCount,
} from "../../../config/constant";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { AllBidsStyle } from "./AllBidsStyle";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import {
  getParcelsByOwnerAstokenId,
  getSendBidByOwner,
  getEstatesByOwner,
} from "../../../hooks/api";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../../config/contracts/BidContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../../common/contract";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";

declare var window: any;
var signer: any, bidContract: any;

export default function AllBids() {
  const classes = AllBidsStyle();
  const { t } = useTranslation();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [receiveCurPage, setReceiveCurPage] = useState<any>(1);
  const [sendCurPage, setSendCurPage] = useState<any>(1);
  const emptyTokens: any[] = [];
  const [sendBidData, setSendBidData] = useState<any>(emptyTokens);
  const [receiveBidData, setReceiveBidData] = useState<any>();
  const [receiveEstateBid, setReceiveEstateBid] = useState<any>();

  const [selectSendRow, setSelectSendRow] = useState(0);
  const [selectReceiveRow, setSelectReceiveRow] = useState(0);

  signer = generateSigner(window.ethereum);

  bidContract = generateContractInstance(
    BidContractAddress,
    BidContractAbi,
    signer
  );

  useEffect(() => {
    getParcelsByOwnerAstokenId(loginAddress).then((parcels: any[]) => {
      getAllParcelsBids(parcels);
    });
    getSendBidByOwner(loginAddress).then((send: any[]) => {
      setSendBidData(send);
    });
    getEstatesByOwner(loginAddress).then((estates: any[]) => {
      getAllEstatesBids(estates);
    });
  }, [loginAddress]);

  const getAllEstatesBids = async (estates: any) => {
    let estatesLength = estates?.length;
    let bidCounterPromises = [];
    let bidCounters = [];
    let bidPromises = [];
    let tokenId = [];

    for (let i = 0; i < estatesLength; i++) {
      bidCounterPromises.push(
        bidContract.bidCounterByToken(EstateProxyAddress, estates[i].toString())
      );
    }
    bidCounters = await Promise.all(bidCounterPromises);

    for (let i = 0; i < bidCounters.length; i++) {
      let bidCount = bidCounters[i].toNumber();
      if (bidCount > 0) {
        for (let j = 0; j < bidCount; j++) {
          bidPromises.push(
            bidContract.getBidByToken(
              EstateProxyAddress,
              estates[i].toString(),
              j
            )
          );
          tokenId.push(estates[i].toString());
        }
      } else {
        continue;
      }
    }
    let allReceivedEstateBids = await Promise.all(bidPromises);

    setReceiveEstateBid({ data: allReceivedEstateBids, estateId: tokenId });
  };

  const getAllParcelsBids = async (parcels: any) => {
    let parcelsLength = parcels?.length;
    let bidCounterPromises = [];
    let bidCounters = [];
    let bidPromises = [];
    let tokenId = [];

    for (let i = 0; i < parcelsLength; i++) {
      bidCounterPromises.push(
        bidContract.bidCounterByToken(SpaceProxyAddress, parcels[i].toString())
      );
    }
    bidCounters = await Promise.all(bidCounterPromises);

    for (let i = 0; i < bidCounters.length; i++) {
      let bidCount = bidCounters[i].toNumber();
      if (bidCount > 0) {
        for (let j = 0; j < bidCount; j++) {
          bidPromises.push(
            bidContract.getBidByToken(
              SpaceProxyAddress,
              parcels[i].toString(),
              j
            )
          );
          tokenId.push(parcels[i].toString());
        }
      } else {
        continue;
      }
    }

    let allReceivedBids = await Promise.all(bidPromises);

    setReceiveBidData({ data: allReceivedBids, tokenId: tokenId });
  };

  //-----------------------receive bid list function -----------------------------

  var countReceive = receiveBidData?.data.length;
  var totalReceivePage = Math.ceil(countReceive / onePageCount);

  const receivepgnum = (value: number) => {
    setReceiveCurPage(value);
  };

  const handleReceiveRow = (key: number) => {
    setSelectReceiveRow(key);
  };

  //------------------------send bid list function-------------------

  var countSend = sendBidData?.length;
  var totalSendPage = Math.ceil(countSend / onePageCount);

  const sendpgnum = (value: number) => {
    setSendCurPage(value);
  };

  const handleSendRow = (key: number) => {
    setSelectSendRow(key);
  };

  return (
    <>
      <div className={classes.receiveBid}>
        <div className={classes.receiveTitle}>{t("BIDS RECEIVED")}</div>
        {(receiveBidData?.data.length === 0 || receiveBidData === undefined) &&
        (receiveEstateBid?.data.length === 0 ||
          receiveEstateBid === undefined) ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't received any bids yet")}...
          </div>
        ) : (
          <>
            <ReceiveBidTable
              columns={headerReceiveData}
              parcelRows={receiveBidData}
              estateRows={receiveEstateBid}
              curPage={receiveCurPage}
              onRowClick={handleReceiveRow}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={receivepgnum}
                totalPage={totalReceivePage}
              />
            </div>
          </>
        )}
      </div>
      <div className={classes.sendBid}>
        <div className={classes.sendTitle}>{t("BIDS PLACED")}</div>
        {sendBidData?.length === 0 || sendBidData === undefined ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't placed any bids yet")}...
          </div>
        ) : (
          <>
            <SendBidTable
              columns={headerSendData}
              rows={sendBidData}
              curPage={sendCurPage}
              onRowClick={handleSendRow}
              // stepIndex={selectSendRow}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={sendpgnum}
                totalPage={totalSendPage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
