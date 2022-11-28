import { createAsyncThunk } from "@reduxjs/toolkit";

export const setloginAddress = createAsyncThunk(
  "auth/loginAddress",
  async (address: any) => {
    const payload = {
      loginAddress: address,
    };
    return payload;
  }
);

export const setlogoutAddress = createAsyncThunk(
  "auth/logoutAddress",
  async () => {
    return true;
  }
);
