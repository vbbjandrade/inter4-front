import React, { Component } from "react";
import { Route, useHistory, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button, IconButton } from "./Button";
import { HeaderText } from "./HeaderText"; 
import styled from 'styled-components';

const notHome = /^\/.*[^]$/;

const HeaderWrapper = styled.div`
    display:flex;
    flex-direction: column;
    .absolute{
        position: absolute;
    }
    .spacer{
        padding-bottom:0px;
    }

    .slide-appear{
        opacity: 0.01;
    }

    .slide-appear.slide-appear-active{
        opacity: 1; 
        transition: all 450ms ease-in;
    }

    .slide-enter {
        opacity: 0.01;
    }

    .slide-enter.slide-enter-active {
        opacity: 1; 
        transition: all 450ms ease-in;
    }

    .slide-exit {
        opacity: 1;
        transform: translate(0, 0px);
    }

    .slide-exit.slide-exit-active {
        opacity: 0.01;
        transform: translate(0, -40px);
        transition: opacity 250ms, transform 350ms ease-in;
    }

    .slide-appear .spacer{
        padding-bottom:0px;
        transition: padding-bottom 250ms ease-in;
    }

    .slide-appear.slide-appear-active .spacer{
        padding-bottom:40px;
    }

    .slide-enter .spacer{
        padding-bottom:0px;
        transition: padding-bottom 250ms ease-in;
    }

    .slide-enter.slide-enter-active .spacer{
        padding-bottom:40px;
    }

    .slide-enter-done .spacer{
        padding-bottom:40px;
    }

    .slide-exit .spacer{
        padding-bottom: 40px;
        transition: padding-bottom 350ms ease-in;
    }

    .slide-exit.slide-exit-active .spacer{
        padding-bottom:0px;
    }
`;

const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;

const TitlesWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

function BackButton(){
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <IconButton onClick={handleClick} icon="keyboard_backspace"/>
    );
}

function TestButton(){
    let history = useHistory();

    function handleClick() {
        history.push("/members/add");
    }

    return (
        <IconButton onClick={handleClick} icon="more_horiz"/>
    );
}

function Header({ location }) {
    return (
        <HeaderWrapper>
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                timeout={{ enter: 450, exit: 350 }}
                classNames={'slide'}
                appear={true}
                >
                    <div>
                        <Switch location={location}>
                            <Route exact path={notHome}>
                                <div className="absolute"><BackButton/></div>
                                <div className="spacer"></div>
                            </Route>
                            <Route exact path="/">
                            </Route>
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <HeaderContainer>
                <TitlesWrapper>
                    <HeaderText/>
                </TitlesWrapper>
                <Route exact path="/">
                    <TestButton />
                </Route>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default withRouter(Header);