import { ActionReducerMap } from "@ngrx/store";
import { IUserDetailsState, IUserListState, userDetailsReducer, userListReducer } from "./reducer";

export interface IUserState {
    readonly list: IUserListState;
    readonly details: IUserDetailsState;
}

export const reducers: ActionReducerMap<IUserState> = {
    list: userListReducer,
    details: userDetailsReducer
};