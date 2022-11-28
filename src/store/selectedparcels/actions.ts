import { createAsyncThunk } from "@reduxjs/toolkit";

export const getparcels = createAsyncThunk(
  "selectedparcels/parcels",
  async (data: any) => {
    const payload = {
      parcels: data,
    };
    return payload;
  }
);
