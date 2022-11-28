import { ethers } from "ethers";
import { CHAIN_INFO } from "../config/constant";

declare var window: any;
var provider: any;

export const getProvider = () => {
  if (window.ethereum !== undefined) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  } else {
    provider = new ethers.providers.JsonRpcProvider(
      CHAIN_INFO.TESTNET.rpcUrls[0]
    );
  }
  return provider;
};
