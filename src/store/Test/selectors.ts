import type { RootState } from "../store";

export const selectTestCount = (state: RootState) => state.test.rowsCount;
