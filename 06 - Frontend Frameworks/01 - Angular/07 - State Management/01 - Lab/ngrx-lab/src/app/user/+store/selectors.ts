import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from ".";

const userModuleSelector = createFeatureSelector<IUserState>('user');

const selectUserList = createSelector(
    userModuleSelector,
    state => state.list
);

const selectUserDetails = createSelector(
    userModuleSelector,
    state => state.details
);

export const selectUserListUsers = createSelector(selectUserList, s => s.users);
export const selectUserDetailsUser = createSelector(selectUserDetails, s => s.user);