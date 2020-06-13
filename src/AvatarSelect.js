import React, { Component } from "react";
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const IconSelect = styled(FormControl)`
  border-radius:20px;
  width: 70px;
  height: 40px;
  align-items: center;
  text-align: center;
  .selector{
    border-radius: 20px;
    width: 70px;
    height: 40px;
    .MuiSelect-outlined.MuiSelect-outlined{
      border-radius: 20px;
      padding-top:6px;
      padding-bottom:6px;
    }
  }
`;

function AvatarSelect(props){
    const [avatar, setAvatar] = React.useState(props.icon);
  
    const handleChange = (event) => {
      setAvatar(event.target.value);
    };
  
    return(
      <IconSelect>
        <Select className="selector" labelId="avatar-select-label" variant="outlined" id="avatar-select" value={avatar} onChange={handleChange}>
          <MenuItem value={'king_bed'}><i className="material-icons">king_bed</i></MenuItem>
          <MenuItem value={'kitchen'}><i className="material-icons">kitchen</i></MenuItem>
          <MenuItem value={'weekend'}><i className="material-icons">weekend</i></MenuItem>
          <MenuItem value={'bathtub'}><i className="material-icons">bathtub</i></MenuItem>
        </Select>
      </IconSelect>
    );
}

export default AvatarSelect;