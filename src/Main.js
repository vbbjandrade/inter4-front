import React, { useState } from "react";
import { BrowserRouter, HashRouter, Redirect } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import styled from 'styled-components';

const AppFrame = styled.div`
    margin:20px;
`;

function Main() {
  const [editable, setEditable] = useState(false);

  return(
    <AppFrame>
      {/* <BrowserRouter> */}
          <Header editable={editable} onEditableChange={() => setEditable(!editable)}/>
          <Content editable={editable}/>
      {/* </BrowserRouter> */}
    </AppFrame>
  );
}
 
export default Main;