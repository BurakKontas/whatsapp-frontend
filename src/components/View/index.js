import React from "react";

import './index.css'

function View({ children, style }) {
    return(
        <div className={"body"}>{children}</div>
    )
}

export default View;