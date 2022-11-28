import type { RootState } from "../store";

export const totalSpace = (state: RootState) =>
  state.parcels.parcels;
