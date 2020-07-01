import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

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

export const selectUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
