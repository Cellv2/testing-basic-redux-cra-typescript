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
    // const example = fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    console.log("SLICE - BEFORE DISPATCH");
    const todos = await fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log("SLICE - AFTER DISPATCH");

    return todos;
};

export const selectUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
