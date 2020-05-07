import React, {useState} from 'react';
import './GenericNavBar.css'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Drawer, Hidden, AppBar } from '@material-ui/core';


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: trigger ? {backgroundColor:"white"} : {backgroundColor:"transparent"}
    });
}


export default function NavBar({left, right, drawer} = {}){

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <ElevationScroll>
            <AppBar className="GenericNavBar_root">
                <Toolbar>
                    <div className="GenericNavBar_left">
                        {/* {left}  */}
                        <h1 style={{color:"rgb(99, 99, 99)"}}>91 Social Front End</h1>
                    </div>
                    
                    <div className="GenericNavBar_right">
                        <Hidden smUp implementation="js">
                            <IconButton
                                edge="start"
                                className="GenericNavBar_menuButton" 
                                color="inherit" 
                                aria-label="menu" 
                                onClick={()=>setDrawerOpen(!drawerOpen)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Hidden xsDown implementation="js">
                            {right}
                        </Hidden>
                    </div>
                </Toolbar>

                <Hidden smUp implementation="js">
                    <Drawer open={drawerOpen} anchor="right" onClose={()=>setDrawerOpen(false)}>
                        {drawer}
                    </Drawer>
                </Hidden>
            </AppBar>
        </ElevationScroll>
    );
}