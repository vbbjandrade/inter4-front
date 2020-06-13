import React from "react";
import { Switch, Route, withRouter, } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import Home from "./Home";
import Settings from "./Settings";
import Devices from "./Devices";

const ContentWrapper = styled.div`
    margin-top:15px;
    position:relative;

    .page{
        position:absolute;
        width: 100%;
    }

    .pageSlider-enter {
        opacity: 0;
    }
    .pageSlider-enter.pageSlider-enter-active {
        opacity: 1;
        transition: all 300ms ease;
    }
    .pageSlider-exit {
        opacity: 1;
    }
    .pageSlider-exit.pageSlider-exit-active {
        opacity: 0;
        transition: all 250ms ease;
    }
`;

function Content (props){
    const devicesList = [
        {name:'Bedroom Outlet 1', route:"bedroom-outlet-1", icon:'king_bed', color:'91c95a'},
        {name:'Kitchen Outlet 1', route:"kitchen-outlet-1", icon:'kitchen', color:'fe6766'},
        {name:'Living Room Outlet 1', route:"living-room-outlet-1", icon:'weekend', color:'b774ff'},
        {name:'Bathroom Outlet 1', route:"bathroom-outlet-1", icon:'bathtub', color:'7dd1ff'},
    ];

    return(
        <ContentWrapper>
            <Route render={ ({ location }) =>
                (<TransitionGroup>
                    <CSSTransition
                        key={ location.pathname.split('/')[2] }
                        timeout={ 300 }
                        classNames={ 'page pageSlider'} 
                        mountOnEnter={ true } 
                        unmountOnExit={ true }>
                            <Switch location={location}>
                                <Route exact path='/dashboard' render={() => <Home items={devicesList} />}/>
                                <Route path='/dashboard/devices' render={() => <Devices items={devicesList} />}/>
                                <Route path='/dashboard/settings' render={() => <Settings editable={props.editable} /> } />
                            </Switch>
                        </CSSTransition>
                </TransitionGroup>)
            }
            />
        </ContentWrapper>
    );
}

export default withRouter(Content);

