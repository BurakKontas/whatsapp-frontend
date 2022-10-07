import React from "react";

//components
import Background from "../Background";

//screens
import Menu from './../Menu/index';

import '../.css'

const Main = ({ props }) => {
    return (
        <div className={"Main_body"}>
            <Menu />
            <Background />
        </div>
    )   
}

export default Main;