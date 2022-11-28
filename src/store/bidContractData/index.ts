import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setBidContractinfo } from "./actions";
import type { BidContractstate } from "./types";

const PREFIX = "BidContract";

const initialState: BidContractstate = {
  maxBidTime: 0,
  minBidTime: 0,
};

const handleBidContractinfo = (state: BidContractstate, res: any) => {
  state.maxBidTime = res.maxBidTime;
  state.minBidTime = res.minBidTime;
};

export const BidContractinfoReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setBidContractinfo.fulfilled.type,
      (state: BidContractstate, action: PayloadAction<any>) => {
        handleBidContractinfo(state, action.payload);
      }
    );
  },
});

export { setBidContractinfo };

export default BidContractinfoReducer.reducer;
