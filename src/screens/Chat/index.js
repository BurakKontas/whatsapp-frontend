import React from "react";

import { useMatches } from "react-router";

import '../.css'

const Chat = () => {
    const matches = useMatches();
    const crumbs = matches;
    const params = crumbs[0].params;

    return (
        <div className={"Chat_body"}>
            <p>Chat</p>
        </div>
    )   
}

export default Chat;