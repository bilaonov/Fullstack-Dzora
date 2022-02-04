import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { UserState } from './types/state'

export const selectAuth = (state: RootState): UserState => state.user
export const isAuth = createSelector(selectAuth, (user) => user.isAuth)
export const setName = createSelector(selectAuth, (user) => user.data?.name)