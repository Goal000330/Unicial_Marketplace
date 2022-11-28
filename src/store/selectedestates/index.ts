import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getestates } from "./actions";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "selectedestates";
const initialState: any = {
  estate: [],
};

const setEstates = (state: any, data: any) => {
  state.estate = data;
};

export const mapestatedataReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getestates.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setEstates(state, action.payload.estates);
      }
    );
  },
});

export { getestates };
export default mapestatedataReducer.reducer;
