import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUsername, selectUsername, setUnAsync } from "./userSlice";
import { useAppDispatch } from "../../app/store";

type Props = {};

const User = (props: Props) => {
    // adding a type to this will cause typing errors with it being 'unknown' (string != typeof RootState.user.username)
    // const username = useSelector<string>(selectUsername);
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const thenSetUn = () => {
        console.log("COMPONENT - BEFORE DISPATCH");
        appDispatch(setUnAsync(`${username}_async`)).then((data) => {
            console.log("COMPONENT - AFTER DISPATCH");
            console.log("COMPONENT - THE NAME FROM API IS: ", data);
        });
        console.log("COMPONENT - AFTER THEN");
    };

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
            <hr />
            <button onClick={thenSetUn}>Then set username</button>
        </div>
    );
};

export default User;
