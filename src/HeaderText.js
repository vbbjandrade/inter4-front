import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Title, Subtitle } from "./Typography";
import styled from 'styled-components';

function HeaderText(){
    return(
        <div>
            <Route exact path="/">
                <Title>Dashboard</Title>
                <Subtitle>Welcome home, Vinícius</Subtitle>
            </Route>

            <Route exact path="/devices/add">
                <Title>Devices</Title>
                <Subtitle>Add a new device</Subtitle>
            </Route>
            <Route exact path="/devices/manage">
                <Title>Devices</Title>
                <Subtitle>View all devices</Subtitle>
            </Route>

            <Route exact path="/members/add">
                <Title>Members</Title>
                <Subtitle>Add members to your location</Subtitle>
            </Route>
            <Route exact path="/members/manage">
                <Title>Members</Title>
                <Subtitle>View members of this location</Subtitle>
            </Route>
            
            <Route exact path="/location/add">
                <Title>Add a new location</Title>
                <Subtitle></Subtitle>
            </Route>
            <Route exact path="/location/manage">
                <Title>Manage locations</Title>
                <Subtitle></Subtitle>
            </Route>
        </div>
    );
}

export {
    HeaderText
};