import React from 'react';
import './Header.css'
import Button from '@material-ui/core/Button'
import NavBar from '../GenericNavBar/GenericNavBar';




function HeaderRight(){




    return (
        <React.Fragment>
            
            <Button className="Header_hireButton" href="/">Form</Button>
            
        </React.Fragment>
    )
}



function Header(){

    return (
        <NavBar
            
            right = {<HeaderRight />}
            
            />
    );
}

export default Header;