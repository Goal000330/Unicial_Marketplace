import axios from "axios";
import { ApiUrl } from "../config/constant";
import { generateContractInstance, generateSigner } from "../common/contract";
import { BigNumber } from "ethers";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../config/contracts/EstateRegitryContract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../config/contracts/SpaceRegistryContract";
import {
  BidContractAddress,
  BidContractAbi,
} from "../config/contracts/BidContract";
import {
  MarketplaceAbi,
  MarketplaceAddress,
} from "../config/contracts/MarketPlaceContract";

declare var window: any;
var signer: any;
var estateRegistryContract: any;
var parcelRegistryContract: any;

if (window.ethereum !== undefined) {
  signer = generateSigner(window.ethereum);
}

export const getCoords = async (ownedTokens: any[]) => {
  let coordPromises = [];
  let coords = [];
  for (let i = 0; i < ownedTokens.length; i++) {
    coordPromises[i] = parcelRegistryContract.decodeTokenId(ownedTokens[i]);
  }
  coords = await Promise.all(coordPromises);
  return coords;
};

export const getParcelsByOwnerAsCoords = async (owner: any) => {
  try {
    parcelRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );
    const balance = (await parcelRegistryContract.balanceOf(owner)).toNumber();
    let tokenPromises = [];
    for (let i = 0; i < balance; i++) {
      let tokenPromise = parcelRegistryContract.tokenOfOwnerByIndex(owner, i);
      tokenPromises.push(tokenPromise);
    }
    let ownedTokens = await Promise.all(tokenPromises);
    return getCoords(ownedTokens);
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

export const getParcelsByOwnerAstokenId = async (owner: any) => {
  try {
    parcelRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );
    const balance = (await parcelRegistryContract.balanceOf(owner)).toNumber();
    let tokenPromises = [];
    for (let i = 0; i < balance; i++) {
      let tokenPromise = parcelRegistryContract.tokenOfOwnerByIndex(owner, i);
      tokenPromises.push(tokenPromise);
    }
    let ownedTokens = await Promise.all(tokenPromises);
    return ownedTokens;
  } catch (error: any) {
    return [];
  }
};

export const getSendBidByOwner = async (owner: any) => {
  try {
    const response = await axios.get(`${ApiUrl}/api/v1/bid/bidder/${owner}`);
    return response.data.data;
  } catch (error: any) {
    return null;
  }
};

export const getEstatesByOwner = async (owner: any) => {
  try {
    estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    const balance = (await estateRegistryContract.balanceOf(owner)).toNumber();
    let tokenPromises = [];
    for (let i = 0; i < balance; i++) {
      let tokenPromise = estateRegistryContract.tokenOfOwnerByIndex(owner, i);
      tokenPromises.push(tokenPromise);
    }
    let ownedTokens = await Promise.all(tokenPromises);

    for (let i = 0; i < ownedTokens.length; i++) {
      if (
        (
          await estateRegistryContract.getEstateSize(ownedTokens[i].toNumber())
        ).toNumber() > 0
      )
        ownedTokens[i] = ownedTokens[i].toNumber();
    }
    return ownedTokens;
  } catch (error: any) {
    return [];
  }
};

export const isParcelApproved = async (operator: string, tokenId: any) => {
  try {
    parcelRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );
    let isApproved = false;
    isApproved = await parcelRegistryContract.isAuthorized(
      operator,
      BigNumber.from(tokenId)
    );
    return isApproved;
  } catch (error: any) {
    return false;
  }
};

export const isEstateApproved = async (
  owner: string,
  operator: string,
  tokenId: any
) => {
  try {
    estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let isApproved = false;
    isApproved =
      (await estateRegistryContract.getApproved(tokenId)) === operator ||
      (await estateRegistryContract.isApprovedForAll(owner, operator)) === true;
    return isApproved;
  } catch (error: any) {
    return false;
  }
};

export const getBidsByToken = async (nftAddress: any, tokenId: any) => {
  try {
    let bidContract = generateContractInstance(
      BidContractAddress,
      BidContractAbi,
      signer
    );
    let bidsCount = (
      await bidContract.bidCounterByToken(nftAddress, BigNumber.from(tokenId))
    ).toNumber();
    let bidPromises = [];

    for (let i = 0; i < bidsCount; i++) {
      bidPromises.push(
        bidContract.getBidByToken(nftAddress, BigNumber.from(tokenId), i)
      );
    }
    let bids = await Promise.all(bidPromises);
    return bids;
  } catch {
    return [];
  }
};

export const getOnsaleListByOwner = async (address: any) => {
  try {
    let marketplaceContract = generateContractInstance(
      MarketplaceAddress,
      MarketplaceAbi,
      signer
    );
    const currentTime = new Date().getTime() / 1000;
    const parcel = await getParcelsByOwnerAstokenId(address);
    const estate = await getEstatesByOwner(address);
    let saleList: any = [];

    for (let index = 0; index < parcel.length; index++) {
      let arr_temp: any = {};
      let arr = await marketplaceContract.orderByAssetId(
        SpaceProxyAddress,
        parcel[index].toString()
      );
      if (arr.expiresAt.toNumber() > currentTime) {
        arr_temp["tokenId"] = parcel[index].toString();
        arr_temp["tokenAddress"] = arr.nftAddress;
        arr_temp["price"] = arr.price.toString();
        arr_temp["expiresAt"] = arr.expiresAt.toNumber();
        saleList.push(arr_temp);
      }
    }
    for (let index = 0; index < estate.length; index++) {
      let arr_temp: any = {};
      let arr = await marketplaceContract.orderByAssetId(
        EstateProxyAddress,
        estate[index].toString()
      );
      if (arr.expiresAt.toNumber() > currentTime) {
        arr_temp["tokenId"] = estate[index].toString();
        arr_temp["tokenAddress"] = arr.nftAddress;
        arr_temp["price"] = arr.price.toString();
        arr_temp["expiresAt"] = arr.expiresAt.toNumber();
        saleList.push(arr_temp);
      }
    }
    return saleList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getEstateSize = async (tokenId: any) => {
  estateRegistryContract = generateContractInstance(
    EstateProxyAddress,
    EstateRegistryAbi,
    signer
  );
  const estateSize = (
    await estateRegistryContract.getEstateSize(tokenId)
  ).toNumber();

  return estateSize;
};

export const getMetadata = async (tokenId: any) => {
  estateRegistryContract = generateContractInstance(
    EstateProxyAddress,
    EstateRegistryAbi,
    signer
  );
  const metadata = await estateRegistryContract.getMetadata(tokenId);
  return metadata;
};
