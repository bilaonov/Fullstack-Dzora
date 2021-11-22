import { RootState } from "../../store";
import { UserState } from "./types/state";

export const selectAuth = (state: RootState): UserState => state.user