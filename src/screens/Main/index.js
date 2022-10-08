import React from "react";

//components
import Background from "../Background";

//screens
import Menu from './../Menu/index';

import './index.css'

const Main = ({ props }) => {

    return (
        <tr className={"Main_body"}>
            <td><Menu className={'menu'}/></td>
            <td><Background className={'bg'}/></td>
        </tr>
    )   
}

export default Main;