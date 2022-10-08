import React from "react";
import io from 'socket.io-client'

import { useMatches } from "react-router";

import './index.css'
import Menu from "../Menu";

const socket = io.connect('http://localhost:5000'); 

var messages = [];

const Chat = () => {
    const matches = useMatches();
    const crumbs = matches;
    const params = crumbs[0].params;

    const [isConnected, setIsConnected] = React.useState(socket.connected);
    const [lastPong, setLastPong] = React.useState(null)
    const [stateMessages, setMessages] = React.useState([]);
    const [user, setUser] = React.useState(socket.id);

    React.useLayoutEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            setUser(socket.id)
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('chatPush', (data) => {
            setLastPong(new Date().toISOString());
            messages.push(data)
            setMessages(messages)
            console.log(messages)
        });

        
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('chatPush');
        };
    }, []);

    const sendchat = () => {
        socket.emit('chatGet', {
            message:'chatGet',
            sender: socket.id
        });
    }

    return (
        <div className={"Chat_body"}>
            <Menu />
            <p>Chat</p>
            <p>Connected: { '' + isConnected }</p>
            <p>Last message: { lastPong || '-' }</p>
            <p>User {user}</p>
            <button onClick={ sendchat }>Send chat</button>
            <p>Messages</p>
            <div id="chat">
                {stateMessages.map(({message,sender}) => {
                    return <p key={Math.random()}>{message} {"->"} {sender}</p>
                })}
            </div>
        </div>
    )   
}

export default Chat;