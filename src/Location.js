import React, { Component } from "react";
 
const Location = ({ links, location }) => {
  const path_components = location.pathname.split("/");
  const parent = "/" + path_components[path_components.length - 2];
  const name = path_components[path_components.length - 1] || "Contact";

  return (
    <div>
      <h2>GOT QUESTIONS?</h2>
      <p>The easiest thing to do is post on
      our <a href="http://forum.kirupa.com">forums</a>
      </p>
    </div>
  );
}
 
export default Location;