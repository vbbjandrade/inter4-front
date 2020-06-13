import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const CarouselWrapper = styled.div`
    position: relative;
    z-index: 1;
    height: 96px;
    margin: 15px 0;
    .Scroller{
        position:absolute;
        display: flex;
        left: -20px;
        right: -20px;
        overflow-x: scroll;
        padding: 5px 15px;
    }
    .initialSpacer{
        flex: 0 0 40px;
    }
    .endingSpacer{
        flex: 0 0 20px;
    }
`;

const CarouselItem = styled.button`
    display:flex;
    flex-direction: column;
    border:none;
    outline:none;
    background: ${props => "#"+props.Color};
    border-radius:20px;
    margin: 0 5px;
    height: 76px;
    width: 76px;
    flex: 0 0 76px;
    padding: 5px;
    font-size: 0.65em;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 0.15s ease;
    transform: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    .material-icons{
        font-size: 2rem;
    }
`;

function Carousel(props){
    let history = useHistory();

    function handleClick(route) {
        history.push("/device/"+route);
    }

    return(
        <CarouselWrapper>
            <div className="Scroller">
                <div className="initialSpacer"/>
                    {props.items.map(({name, route, icon, color}) => 
                        <CarouselItem onClick={()=> handleClick(route)} key={name} Color={color}><i className="material-icons">{icon}</i>{name}</CarouselItem>
                    )}
                <div className="endingSpacer"/>
            </div>
        </CarouselWrapper>
    );
}

export default Carousel;