import React, { Component } from "react";
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display:flex;
  background: ${props => props.primary ? "#213654" : "white"};
  color: ${props => props.primary ? "white" : "#213654"};
  font-size: 1em;
  padding: 0.65em 0.75em;
  border:none;
  border-radius: 20px;
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
      <IB onClick ={props.onClick}>
        <i className="material-icons">{props.icon}</i>
      </IB>
    );
}

const TIB = styled(Button)`
  justify-content: space-between;
  background: #3A95FF;
  color: #fff;
  font-size: 0.8em;
  cursor: pointer;

  .material-icons{
    margin-left: 5px;
    font-size:1.2em;
    color:#fff;
  }
`;

function TextIconButton(props){
    return(
      <TIB type={props.type} onClick={props.onClick}>{props.text}<i className="material-icons">{props.icon}</i></TIB>
    );
}

export {
    Button,
    IconButton,
    TextIconButton
};