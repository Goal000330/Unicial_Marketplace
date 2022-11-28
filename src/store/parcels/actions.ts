import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTiles } from "../../hooks/tiles";

export const setSpaces = createAsyncThunk("parcels/getParcels", async () => {
  try {
    const res = await fetchTiles();
    return res;
  } catch (err: any) {}
});
