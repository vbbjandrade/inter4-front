import React, { useState } from "react";
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import AvatarSelect from './AvatarSelect';
import api from './services/api'


const ListStyledAvatar = styled(ListItemAvatar)`
  .MuiAvatar-colorDefault{
    background: ${props => "#"+props.Color};
  }
`;

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

const FormWrapper = styled.form`
  display:flex;
  width: 100%;
  position: relative;
  padding-right: 58px;
  .MuiListItemSecondaryAction-root{
    right:0;
  }
`;

const ItemWrapper = styled.div`
  display:flex;
  width: 100%;
  position: relative;
  padding-right: 90px;
  .MuiListItemSecondaryAction-root{
    right:0;
  }
`;

function DeviceItem(props){
  const [editing, setEditing] = useState(false);

  const [nome, setNome] = useState(props.name);
  const [icon, setIcon] = useState(props.icon);
  const [color, setColor] = useState(props.color);

  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/rotaDevice', {
      nome,
      icon,
      color
    })

    window.location.reload(false);
}

  if(editing){
    return(
      <ListItem>
        <FormWrapper onSubmit={handleSubmit}>
        <IconSelect>
            <Select className="selector" labelId="avatar-select-label" variant="outlined" id="avatar-select" value={icon} onChange={event => setIcon(event.target.value)}>
                <MenuItem value={'king_bed'}><i className="material-icons">king_bed</i></MenuItem>
                <MenuItem value={'kitchen'}><i className="material-icons">kitchen</i></MenuItem>
                <MenuItem value={'weekend'}><i className="material-icons">weekend</i></MenuItem>
                <MenuItem value={'bathtub'}><i className="material-icons">bathtub</i></MenuItem>
            </Select>
        </IconSelect>

          <FormControl style={{marginLeft: '15px'}}>
              <TextField id="name-input" value={nome} onChange={event => setNome(event.target.value)}/>
          </FormControl>

          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Done" type="submit">
              <i className="material-icons">done</i>
            </IconButton>
          </ListItemSecondaryAction>
        </FormWrapper>
      </ListItem>
    );
  }
  else{
    return(
      <ListItem>
        <ItemWrapper>
          <ListStyledAvatar Color={color}>
            <Avatar>
              <i className="material-icons">{icon}</i>
            </Avatar>
          </ListStyledAvatar>
          <ListItemText primary={nome} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Edit" onClick={() => setEditing(!editing)}>
              <i className="material-icons">edit</i>
            </IconButton>
            <IconButton edge="end" aria-label="Delete">
              <i className="material-icons">delete</i>
            </IconButton>
          </ListItemSecondaryAction> 
        </ItemWrapper>
      </ListItem>
    );
  }
}

function DeviceList(props){
    return(
        <div>
          {props.items.map(({name, icon, color}) =>          
            <DeviceItem key={name} name={name} icon={icon} color={color}/>
          )}
        </div>
    );
}

export default DeviceList;