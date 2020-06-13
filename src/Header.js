import React, { useState, useContext } from "react";
import { Route, useHistory, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextIconButton } from "./Button";
import { Navbar, NavItem } from "./Navbar";
import { DropdownMenu } from "./Dropdown";
import { HeaderText } from "./HeaderText"; 
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import AvatarSelect from './AvatarSelect';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import api from './services/api'

const notHome = /^\/dashboard.*[^]$/;

const HeaderWrapper = styled.div`
    display:flex;
    flex-direction: column;
    position:relative;

    .absolute{
        position: absolute;
    }
    .spacer{
        padding-bottom:0px;
    }

    .slide-appear{
        opacity: 0.01;
    }

    .slide-appear.slide-appear-active{
        opacity: 1; 
        transition: all 450ms ease-in;
    }

    .slide-enter {
        opacity: 0.01;
    }

    .slide-enter.slide-enter-active {
        opacity: 1; 
        transition: all 450ms ease-in;
    }

    .slide-exit {
        opacity: 1;
        transform: translate(0, 0px);
    }

    .slide-exit.slide-exit-active {
        opacity: 0.01;
        transform: translate(0, -45px);
        transition: opacity 250ms, transform 350ms ease-in;
    }

    .slide-appear .spacer{
        padding-bottom:0px;
        transition: padding-bottom 210ms ease-in;
    }

    .slide-appear.slide-appear-active .spacer{
        padding-bottom:45px;
    }

    .slide-enter .spacer{
        padding-bottom:0px;
        transition: padding-bottom 210ms ease-in;
    }

    .slide-enter.slide-enter-active .spacer{
        padding-bottom:45px;
    }

    .slide-enter-done .spacer{
        padding-bottom:45px;
    }

    .slide-exit .spacer{
        padding-bottom: 45px;
        transition: padding-bottom 350ms ease-in;
    }

    .slide-exit.slide-exit-active .spacer{
        padding-bottom:0px;
    }
`;

const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:flex-start;
`;

const TitlesWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 60%;
`;

const DialogForm = styled(DialogContent)`
    display:flex;
    flex-direction: column;
    & > *{
        display: flex;
        align-items: center;
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

function BackButton(){
    let history = useHistory();

    function handleClick() {
        history.push("/dashboard");
    }

    return (
        <IconButton onClick={handleClick} edge="end" aria-label="Back">
            <i className="material-icons">keyboard_backspace</i>
        </IconButton>
    );
}

function AddButton(){
    const [open, setOpen] = useState(false);

    const [serial, setSerial] = useState('');
    const [device, setDevice] = useState('');
    const [icon, setIcon] = useState('king_bed');

    async function handleSubmit(event){
        event.preventDefault();
        
        const response = await api.post('/rotaDevice', {
          serial,
          device,
          icon
        })

        window.location.reload(false);
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <TextIconButton text="Add New" icon="add_circle" onClick={handleClickOpen}/>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Register a new Device</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogForm>
                    <FormControl style={{marginBottom: 15}} className="FormInput">
                        <TextField id="serial-input" label="Serial" variant="filled" value={serial} onChange={event => setSerial(event.target.value)} required/>
                    </FormControl>

                    <FormControl style={{marginBottom: 15}} className="FormInput">
                        <TextField id="name-input" label="Device Name" variant="filled" value={device} onChange={event => setDevice(event.target.value)} required/>
                    </FormControl>

                    <FormControl className="FormInput">
                        <IconSelect>
                            <Select className="selector" labelId="avatar-select-label" variant="outlined" id="avatar-select" value={icon} onChange={event => setIcon(event.target.value)}>
                                <MenuItem value={'king_bed'}><i className="material-icons">king_bed</i></MenuItem>
                                <MenuItem value={'kitchen'}><i className="material-icons">kitchen</i></MenuItem>
                                <MenuItem value={'weekend'}><i className="material-icons">weekend</i></MenuItem>
                                <MenuItem value={'bathtub'}><i className="material-icons">bathtub</i></MenuItem>
                            </Select>
                        </IconSelect>
                    </FormControl>
            </DialogForm>
            <DialogActions>
                <TextIconButton text="Cancel" icon="" onClick={handleClose}/>
                <TextIconButton text="Add Device" icon="" type="submit"/>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }

function EditButton(props){
    const editable = props.editable;
    if (editable){
        return(
            <TextIconButton text="Cancel" icon="clear" onClick={props.onEditableChange} />
        );
    }
    else{
        return(
            <TextIconButton text="Edit" icon="create" onClick={props.onEditableChange} />
        );
    }
}

function MenuButton(){
    return(
        <NavItem icon="more_horiz">
            <DropdownMenu/>
        </NavItem>
    );
}

function Header({ location, editable, onEditableChange }) {

    return (
        <HeaderWrapper>
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'slide'} appear={true} >
                    <div>
                        <Switch location={location}>
                            <Route exact path={notHome}>
                                <div className="absolute"><BackButton/></div>
                                <div className="spacer"></div>
                            </Route>
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <HeaderContainer>
                <TitlesWrapper>
                    <HeaderText/>
                </TitlesWrapper>

                <Navbar>
                    <Route exact path="/dashboard">
                        <MenuButton/>
                    </Route>
                    <Route path="/dashboard/devices">
                        <AddButton/>
                    </Route>
                    <Route path="/dashboard/settings">
                        <EditButton editable={editable} onEditableChange={onEditableChange}/>
                    </Route>
                </Navbar>

            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default withRouter(Header);