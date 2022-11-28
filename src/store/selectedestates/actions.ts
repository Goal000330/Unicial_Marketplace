import { createAsyncThunk } from "@reduxjs/toolkit";

export const getestates = createAsyncThunk(
  "selectedestate/estates",
  async (data: any) => {
    const payload = {
      estates: data,
    };
    return payload;
  }
);
