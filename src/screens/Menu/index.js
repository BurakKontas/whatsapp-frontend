import React from "react";

//components
import { IconButton, TextField, Box } from '@mui/material';

//icons
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './index.css'


//const userData = require('../../datas/users.json');

const Menu = () => {
    return (
        <Box sx={{backgroundColor:'background.paper'}} className="Menu_body">
            <Box className={"Menu_topMenu"}>
                <Box className={"top"} sx={{color:'text.primary'}}>
                    <img className={"avatar"} src={"https://robohash.org/ipsamrerumquis.png?size=50x50&set=set1"} />
                    <p className={"label"}>Sohbetler</p>
                    <Box className={"ibuttons"}>
                        <Box className={"ibuttons_inner"}>
                            <IconButton className={"ibutton"} sx={{color:"background.icon"}} size={'large'} children={<MoreHorizIcon />} />
                            <IconButton className={"ibutton"} sx={{color:"background.icon"}} size={'large'} children={<DriveFileRenameOutlineIcon />} />
                            <IconButton className={"ibutton"} sx={{color:"background.icon"}} size={'large'} children={<SlowMotionVideoIcon />} />
                        </Box>
                    </Box>
                </Box>
                <Box className={"bottom"}>
                    <TextField variant="outlined" placeholder="Search" color={'success'} />
                </Box>
            </Box>
        </Box>
    )   
}

export default Menu;

/*
{userData.map((user) => {
    return <Box>{user.name}</Box>
})};
*/