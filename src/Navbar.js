import React, { useState } from "react";
import { Button, IconButton, TextIconButton } from "./Button";
import styled from 'styled-components';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}
  
function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}><i className="material-icons">{props.icon}</i></a>
            {open && props.children}
        </li>
    );
}

export {
    Navbar,
    NavItem
};