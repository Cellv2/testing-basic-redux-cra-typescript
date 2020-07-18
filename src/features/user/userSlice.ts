import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState, AppThunkPromise } from "../../app/store";

interface UserState {
    username: string;
}

const initialState: UserState = {
    username: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { setUsername } = userSlice.actions;

export const setUsernameAsync = (name: string): AppThunk => (dispatch) => {
    setTimeout(() => {
        dispatch(setUsername(name));
    }, 1000);
};

export const setUnAsync = (name: string): AppThunkPromise => async (
    dispatch,
    getState
) => {
    console.log("SLICE - BEFORE DISPATCH");
    // https://jsonplaceholder.typicode.com/users/1
    const user = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userInfo = await user.json();
    const username = userInfo.username;
    dispatch(setUsername(`${username}_async`));
    console.log("SLICE - AFTER DISPATCH");

    return username;
};

export const selectUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
