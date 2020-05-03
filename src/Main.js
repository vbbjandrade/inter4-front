import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import styled from 'styled-components';

const AppFrame = styled.div`
    margin:20px;
`;

function Main() {
  return(
    <AppFrame>
      <BrowserRouter>
        <Header/>
        <Content/>
      </BrowserRouter>
    </AppFrame>
  );
}
 
export default Main;