import { createSlice } from "@reduxjs/toolkit";
import { setSpaces } from "../parcels/actions";
import { parcels } from "./types";

const PREFIX = "parcels";
const initialState: parcels = {
  parcels: {},
};

const storeParcels = (state: parcels, data: any) => {
  state.parcels = data;
};

export const parcelsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSpaces.fulfilled.type,
      (state: parcels, action: any) => {
        storeParcels(state, action.payload);
      }
    );
  },
});

export { setSpaces };
export default parcelsReducer.reducer;
