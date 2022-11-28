import type { RootState } from "../store";

export const selectestates = (state: RootState) =>
  state.selectedestates.estate;
