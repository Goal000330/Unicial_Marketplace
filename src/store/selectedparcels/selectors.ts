import type { RootState } from "../store";

export const selectparcels = (state: RootState) =>
  state.selectedparcels.parcels;
