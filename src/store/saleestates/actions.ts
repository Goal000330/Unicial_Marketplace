import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSaleEstatesAPI } from "../api/saleestates";

export const setSaleEstates = createAsyncThunk(
  "saleestates/getSaleEstates",
  async () => {
    try {
      const res = await getSaleEstatesAPI();
      return res;
    } catch (err: any) {}
  }
);
