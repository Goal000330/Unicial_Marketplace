import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTest } from "./actions";

import type { testState } from "./types";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "test";
const initialState: testState = {
  rowsCount: 0,
};

const settestCount = (state: testState, testInfo: number) => {
  state.rowsCount = testInfo;
};

export const testReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTest.fulfilled.type,
      (state: testState, action: PayloadAction<any>) => {
        settestCount(state, action.payload);
      }
    );
  },
});

export { getTest };
export default testReducer.reducer;
