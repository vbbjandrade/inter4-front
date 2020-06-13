import React, { Component } from "react";
import Carousel from "./Carousel"; 

const Home = (props) => {
  return (
    <div>
      <Carousel items={props.items}/>
    </div>
  );
}
 
export default Home;