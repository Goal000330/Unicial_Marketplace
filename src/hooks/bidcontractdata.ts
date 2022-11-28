import { ethers } from "ethers";
import { CHAIN_INFO } from "../config/constant";
import {
  BidContractAddress,
  BidContractAbi,
} from "../config/contracts/BidContract";

const provider = new ethers.providers.JsonRpcProvider(
  CHAIN_INFO.TESTNET.rpcUrls[0]
);
const bidConract = new ethers.Contract(
  BidContractAddress,
  BidContractAbi,
  provider
);

export const getBidcontract = async () => {
  var promises = [];
  promises.push(bidConract.MAX_BID_DURATION());
  promises.push(bidConract.MIN_BID_DURATION());

  const txPromises = await Promise.all(promises);

  const Limitinfo = {
    maxBidTime: txPromises[0].toString(),
    minBidTime: txPromises[1].toString(),
  };

  return Limitinfo;
};
