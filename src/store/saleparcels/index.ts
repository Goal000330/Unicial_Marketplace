import { createSlice } from "@reduxjs/toolkit";
import { setSaleParcels } from "./actions";
import { saleSpaces } from "./types";

const PREFIX = "saleparcels";
const initialState: saleSpaces = {
  parcels: {},
};

const setSpaces = (state: saleSpaces, data: any) => {
  state.parcels = data.data;
};

export const saleparcelsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSaleParcels.fulfilled.type,
      (state: saleSpaces, action: any) => {
        setSpaces(state, action.payload.data);
      }
    );
  },
});

export { setSaleParcels };
export default saleparcelsReducer.reducer;
