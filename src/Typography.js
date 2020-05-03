import React, { Component } from "react";
import styled from 'styled-components';

const Title = styled.h1`
    font-family: Avenir-Bold;
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    color: ${props => props.primary ? "white" : "#213654"};
`;

const Subtitle = styled.h2`
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    color: ${props => props.primary ? "white" : "#95A8B6"};
`;

export {
    Title, 
    Subtitle,
};