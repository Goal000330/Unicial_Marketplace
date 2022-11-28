import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSaleParcelsAPI } from "../api/saleparcels";

export const setSaleParcels = createAsyncThunk(
  "saleparcels/getSaleParcels",
  async () => {
    try {
      const res = await getSaleParcelsAPI();
      return res;
    } catch (err: any) {}
  }
);
