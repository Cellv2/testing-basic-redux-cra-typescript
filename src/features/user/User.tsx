import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUsername, selectUsername } from "./userSlice";

type Props = {};

const User = (props: Props) => {
    // adding a type to this will cause typing errors with it being 'unknown' (string != typeof RootState.user.username)
    // const username = useSelector<string>(selectUsername);
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    return (
        <div>
            <p>The store's username is: {username}</p>
            <input
                type="text"
                placeholder="userName"
                onChange={(e) => dispatch(setUsername(e.currentTarget.value))}
                value={username}
            />
            <button
                onClick={() => dispatch(setUsername("Hi! Barry Scott here!"))}
            >
                Who's there?
            </button>
        </div>
    );
};

export default User;
