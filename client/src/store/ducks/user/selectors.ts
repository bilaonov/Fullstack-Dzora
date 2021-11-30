import { RootState } from "../../store";
import { UserState } from "./types/state";

export const selectAuth = (state: RootState): UserState => state.user
export const isAuth = (state: RootState): boolean => state.user.isAuth