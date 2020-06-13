import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
    position: absolute;
    top: 38px;
    width: 300px;
    background: #fff;
    -webkit-box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.4);
    border-radius: 8px;
    transform: translateX(-90%);
    padding: 1rem 0;
    overflow: hidden;
    transition: height 300ms ease;
    display: flex;
    flex-direction:column;
    z-index: 2;
    .menu{
        width:100%;
    }
    .menu-primary-enter {
        position: absolute;
        transform: translateX(-110%);
    }
    .menu-primary-enter-active {
        transform: translateX(0%);
        transition: all 500ms ease;
    }
    .menu-primary-exit {
        position: absolute;
    }
    .menu-primary-exit-active {
        transform: translateX(-110%);
        transition: all 500ms ease;
    }
    .menu-secondary-enter {
        transform: translateX(110%);
    }
    .menu-secondary-enter-active {
        transform: translateX(0%);
        transition: all 500ms ease;
    }
    .menu-secondary-exit {

    }
    .menu-secondary-exit-active {
        transform: translateX(110%);
        transition: all 500ms ease;
    }
`;

const MenuItem = styled.a`
height: 50px;
display: flex;
align-items: center;
padding: 0.5rem 1.5rem;
background: #fff;
transition: background 300ms ease;
color: #213654;
font-family: "Avenir-Demi";
    &:hover{
        background: #ececec;
    }
    i{
        font-size:1.8rem;
    }
    i.left{
        margin-right: 15px;
    }
    i.right{
        margin-left: auto;
    }
    h2{
        font-family: "Avenir-Bold";
        font-weight: 100;
        font-size: 1.2rem;
    }
`;

function DropdownMenu(){
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return(
            <MenuItem href={props.route} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <i className="material-icons-outlined left">{props.leftIcon}</i>
                { props.children }
                <i className="material-icons-outlined right">{props.rightIcon}</i>
            </MenuItem>
        );
    }

    return(
        <DropdownWrapper style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem route="/dashboard/settings" leftIcon="settings">Settings</DropdownItem>
                    <DropdownItem route="/dashboard/devices" leftIcon="settings_remote">Devices</DropdownItem>
                    {/* <DropdownItem leftIcon="home_work" rightIcon="chevron_right" goToMenu="settings">Location</DropdownItem> */}
                </div>
            </CSSTransition>

            {/* <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon="chevron_left"><h2>Menu Inicial</h2></DropdownItem>
                    <DropdownItem leftIcon="done">Option 1</DropdownItem>
                    <DropdownItem leftIcon="done">Option 2</DropdownItem>
                    <DropdownItem leftIcon="done">Option 3</DropdownItem>
                    <DropdownItem leftIcon="done">Option 4</DropdownItem>   
                </div>
            </CSSTransition> */}
        </DropdownWrapper>
    );
}

export {
    DropdownMenu
};