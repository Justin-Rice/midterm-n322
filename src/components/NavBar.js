import React from 'react'
import 'semantic-ui-css/semantic.css';
import {Menu} from 'semantic-ui-react';


const NavBar = () => {
    return(
        <React.Fragment>
            <Menu>
                <Menu.Item
                icon="home"
                link="/Homr"
                />
                 <Menu.Item
                icon="game"
                link="/Game"
                />
                 <Menu.Item
                icon="group"
                link="/Contact"
                />
            </Menu>

        </React.Fragment>
    )

}
export default NavBar;