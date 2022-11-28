import type { RootState } from "../store";

export const selectLoginAddress = (state: RootState) => state.auth.loginAddress;
