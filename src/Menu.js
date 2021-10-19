import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="menu">
        <NavLink exact to="/"> Home </NavLink>  |
        <NavLink exact to="/.first"> First </NavLink>  |
        <NavLink exact to="/.second"> Second </NavLink>  |
        <NavLink exact to="/.third"> Third </NavLink>  |
        <NavLink exact to="/.fourth"> Fourth </NavLink>  |
        <NavLink exact to="/.fifth"> Fifth </NavLink>  |
        <NavLink exact to="/.sixth"> Sixth </NavLink>  |
        <NavLink exact to="/.seventh"> Seventh </NavLink>  |
        <NavLink exact to="/.eight"> Eight </NavLink>  |
        <NavLink exact to="/.ninth"> Ninth </NavLink>  |
        </div>
    );
}
 
export default Menu;