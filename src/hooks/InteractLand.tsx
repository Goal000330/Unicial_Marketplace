import { ethers } from "ethers";
import { getProvider } from "./Common";
import {
  SpaceRegistryAbi,
  SpaceProxyAddress,
} from "../config/contracts/SpaceRegistryContract";

var provider: any;
var signer: any;
var landContract;

export const createEstateWithMetaData = async (
  axisX_array: any,
  axisY_array: any,
  beneficiaryAddress: any,
  metaData: any
) => {
  provider = getProvider();
  signer = provider.getSigner();
  landContract = new ethers.Contract(
    SpaceProxyAddress,
    SpaceRegistryAbi,
    signer
  );

  const createEstateWithMetaDataTx =
    await landContract.createEstateWithMetadata(
      axisX_array,
      axisY_array,
      beneficiaryAddress,
      metaData
    );
  await createEstateWithMetaDataTx.wait();
};

export const addEstate = async (
  axisX_array: any,
  axisY_array: any,
  estateId: any
) => {
  provider = getProvider();
  signer = provider.getSigner();

  landContract = new ethers.Contract(
    SpaceProxyAddress,
    SpaceRegistryAbi,
    signer
  );

  const addEstateContract = await landContract.transferSpaceManyToEstate(
    axisX_array,
    axisY_array,
    estateId
  );
  await addEstateContract.wait();
};
