import React, { Component } from "react";
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#213654" : "white"};
  color: ${props => props.primary ? "white" : "#213654"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  outline:none;
  transition: all 0.3s;
  &:hover{
      background: grey;
  }
`;

const IB = styled(Button)`
  display:flex;
  justify-content:center;
  align-items:center;
  background: ${props => props.primary ? "#213654" : "white"};
  color: ${props => props.primary ? "white" : "#213654"};
  width:40px;
  height:40px;
  border:none;
  padding: 0.25em;
  border-radius:50%;
`;

function IconButton(props){
    return(
        <IB onClick={props.onClick}><i className="material-icons">{props.icon}</i></IB>
    );
}

export {
    Button,
    IconButton,
};