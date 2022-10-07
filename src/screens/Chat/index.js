import React from "react";

import { useMatches } from "react-router";

import "./index.css";

const Chat = () => {
    const matches = useMatches();
    const crumbs = matches;
    const params = crumbs[0].params;

    return (
        <div className="main">
            <p>Chat</p>
        </div>
    )   
}

export default Chat;