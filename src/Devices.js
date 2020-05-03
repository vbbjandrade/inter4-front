import React, { Component } from "react";

const Stuff = ({ links, location }) => {
  const path_components = location.pathname.split("/");
  const parent = "/" + path_components[path_components.length - 2];
  const name = path_components[path_components.length - 1] || "Stuff";

  return (
    <div>
      <h2>STUFF</h2>
      <p>Mauris sem velit, vehicula eget sodales vitae,
      rhoncus eget sapien:</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
    </div>
  );
}
 
export default Stuff;