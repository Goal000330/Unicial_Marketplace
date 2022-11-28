import { createSlice } from "@reduxjs/toolkit";
import { setSaleEstates } from "./actions";
import { saleEstates } from "./types";

const PREFIX = "saleEsatates";
const initialState: saleEstates = {
  estates: {},
};

const setSpaces = (state: saleEstates, data: any) => {
  state.estates = data.data;
};

export const saleestatesReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSaleEstates.fulfilled.type,
      (state: saleEstates, action: any) => {
        setSpaces(state, action.payload.data);
      }
    );
  },
});

export { setSaleEstates };
export default saleestatesReducer.reducer;
