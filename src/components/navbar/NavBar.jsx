import React from 'react';
import classes from './NavBar.module.css';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import events from '../../images/events.png';
import build from '../../images/build.png';
import user from '../../images/user.png';
const NavBar = () => {
    return (
        <div className={classes.navBar}>
            <div className={'navbar_logo'}>
                <Link to="/login"><img src={logo} alt="logo"/></Link>
            </div>
            <ul className={classes.navbarMenu}>
                <li><Link to="/distributor"><img src={user} alt="icon"/>Distributor</Link></li>
                <li><Link to="/home"><img src={build} alt="icon"/>Buildings</Link></li>
                <li><Link to="/events"><img src={events} alt="icon"/>Events</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;