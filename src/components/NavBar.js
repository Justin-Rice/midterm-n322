import React from 'react'
import 'semantic-ui-css/semantic.css';
import {Menu} from 'semantic-ui-react';
import {Link } from 'gatsby'


const NavBar = () => {
    return(
        <React.Fragment>
            <Menu>
            <Link to='/'>
                <Menu.Item
                icon="home"
                />
            </Link> 
            <Link to='/GamesPage'>
                <Menu.Item
                icon="game"
                />
            </Link> 
            <Link to='/ContactPage'>
                <Menu.Item
                icon="group"
                />
            </Link> 
            </Menu>

        </React.Fragment>
    )

}
export default NavBar;