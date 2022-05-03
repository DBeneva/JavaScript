import { createReducer } from "@ngrx/store";

export interface IUserListState {
    readonly users: any[] | null;
}

const initialUserListState: IUserListState = {
    users: null
};

export const userListReducer = createReducer(
    initialUserListState
);

export interface IUserDetailsState {
    readonly user: any | null;
}

const initialUserDetailsState: IUserDetailsState = {
    user: null
};

export const userDetailsReducer = createReducer(
    initialUserDetailsState
);