import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type

export const max = (state: RootState) => state.bidcontract.maxBidTime;
export const min = (state: RootState) => state.bidcontract.minBidTime;