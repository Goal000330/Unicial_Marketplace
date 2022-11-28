import { REQUEST_API_URL } from "../config/constant";
import axios from "axios";

export const getSaleDataAPI = async () => {
  return axios.get(`${REQUEST_API_URL}/store/successdata`);
};
