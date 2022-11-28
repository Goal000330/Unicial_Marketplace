import { ethers } from "ethers";
import { CHAIN_INFO } from "../config/constant";
import {
  UccContractAddress,
  UccContractAbi,
} from "../config/contracts/UnicialCashToken";

export const generateContractInstance = (
  contractAddress: string,
  contractAbi: any,
  signer: any
) => {
  let contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return contract;
};

export const generateSigner = (ethereum: any) => {
  var provider = new ethers.providers.Web3Provider(ethereum, "any");
  // check if an account is connected at the moment
  var signer = provider.getSigner();
  return signer;
};

export const getZNXBalance = async (address: string) => {
  const provider = new ethers.providers.JsonRpcProvider(
    CHAIN_INFO.TESTNET.rpcUrls[0]
  );

  return await provider.getBalance(address);
};

export const getUccBalance = async (address: string) => {
  const provider = new ethers.providers.JsonRpcProvider(
    CHAIN_INFO.TESTNET.rpcUrls[0]
  );
  const uccContract = new ethers.Contract(
    UccContractAddress,
    UccContractAbi,
    provider
  );

  return await uccContract.balanceOf(address);
};
