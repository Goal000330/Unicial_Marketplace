import { REQUEST_API_URL } from "../config/constant";
import axios from "axios";

export const saveItem = async (formData: any) => {
  try {
    const res = await axios.post(
      `${REQUEST_API_URL}/builder/saveItem`,
      formData
    );
    console.log("return value:   ", res);
  } catch (error) {
    return false;
  }
};
