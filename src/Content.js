import React, { useState, useEffect, useHistory, useLocation, Component } from "react";
import { Switch, Route, withRouter, } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import Home from "./Home";
import Devices from "./Devices";
import Members from "./Members";
import Location from "./Location"


function getPathDepth (location) {
    let pathArr = (location || {}).pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
}

const ContentWrapper = styled.div`
    margin-top:15px;
    position:relative;

    .page{
        position:absolute;
    }

    .pageSliderLeft-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .pageSliderLeft-enter.pageSliderLeft-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: all 600ms;
    }
    .pageSliderLeft-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    .pageSliderLeft-exit.pageSliderLeft-exit-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
        transition: all 600ms;
    }

    .pageSliderRight-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .pageSliderRight-enter.pageSliderRight-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: all 600ms;
    }
    .pageSliderRight-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    .pageSliderRight-exit.pageSliderRight-exit-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
        transition: all 600ms;
    }
`;

class Content extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          prevDepth: getPathDepth(props.location)
        };
      }
    render(){
        return(
            <ContentWrapper>
                <Route render={ ({ location }) =>
                    (<TransitionGroup>
                        <CSSTransition
                            key={ location.pathname.split('/')[1] }
                            timeout={ 500 }
                            classNames={ getPathDepth(location) - this.state.prevDepth ? 'page pageSliderLeft' : 'page pageSliderRight'} 
                            mountOnEnter={ true } 
                            unmountOnExit={ true }>
                                <Switch location={location}>
                                    <Route path='/' exact component={ Home } />
                                    <Route path='/devices' component={ Devices } />
                                    <Route path='/members' component={ Members } />
                                    <Route path='/location' component={ Location } />
                                </Switch>
                            </CSSTransition>
                    </TransitionGroup>)
                }
                />
            </ContentWrapper>
        );
    }
}

export default withRouter(Content);

