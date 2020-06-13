import React, { Component } from "react";
import List from '@material-ui/core/List';
import DeviceList from './DeviceList';

const Devices = (props) => {

  return (
    <div>
      <List>
          <DeviceList items={props.items}></DeviceList>
      </List>
    </div>
  );
}
 
export default Devices;