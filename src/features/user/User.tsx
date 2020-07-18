import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUsername, selectUsername, setUnAsync } from "./userSlice";

type Props = {};

const User = (props: Props) => {
    // adding a type to this will cause typing errors with it being 'unknown' (string != typeof RootState.user.username)
    // const username = useSelector<string>(selectUsername);
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    const thenSetUn = () => {
        // console.log("COMPONENT - BEFORE DISPATCH");
        // dispatch(thenSetUsername(`${username}_asnyc`));
        // console.log("COMPONENT - AFTER DISPATCH");

        // console.log("COMPONENT - BEFORE DISPATCH");
        // dispatch(
        //     sSetUn(`${username}_async`, dispatch).then(() => {
        //         // console.log("COMPONENT - AFTER DISPATCH");
        //     })
        // );

        console.log("COMPONENT - BEFORE DISPATCH");
        //@ts-ignore
        dispatch(setUnAsync(`${username}_async`)).then(() =>
            console.log("COMPONENT - AFTER DISPATCH")
        );
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
