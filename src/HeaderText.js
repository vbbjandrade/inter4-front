import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Title, Subtitle } from "./Typography";
import styled from 'styled-components';

const HeaderSub = styled(Subtitle)`
  margin-top:10px;
`;

function HeaderText(){
    return(
        <div>
            <Route exact path="/dashboard">
                <Title>Dashboard</Title>
                <HeaderSub>Welcome home, Vinícius</HeaderSub>
            </Route>

            <Route exact path="/dashboard/settings">
                <Title>Settings</Title>
                <HeaderSub>Manage your account</HeaderSub>
            </Route>

            <Route exact path="/dashboard/devices">
                <Title>Devices</Title>
                <HeaderSub>Manage your devices</HeaderSub>
            </Route>
        </div>
    );
}

export {
    HeaderText
};