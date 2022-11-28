import { REQUEST_API_URL } from "../../../config/constant";
import axios from "axios";

export const getSaleParcelsAPI = async () => {
  return axios.get(`${REQUEST_API_URL}/store/activeparcels`);
};
