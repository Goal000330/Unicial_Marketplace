import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBidcontract } from "../../hooks/bidcontractdata";

const setBidContractinfo = createAsyncThunk("BidContractinfo/get", async () => {
  const payload = getBidcontract();
  return payload;
});

export { setBidContractinfo };
