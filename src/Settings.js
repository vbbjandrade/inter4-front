import React, { Component, useState } from "react";
import { SettingsForm } from "./SettingsForm";
import Checkbox from '@material-ui/core/Checkbox';

function Settings (props){
  return (
    <div id="settings">
      <SettingsForm editable={props.editable}/>
    </div>
  );
}
 
export default Settings;