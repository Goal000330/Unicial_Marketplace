import axios, { REQUEST_API_URL } from "../config";

const PREFIX = "test";

export const getTestAPI = async () =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}/filter`);
