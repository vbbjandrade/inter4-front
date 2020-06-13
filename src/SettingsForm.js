import React, { Component, useState } from "react";
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { TextIconButton } from './Button';
import api from './services/api';

const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  .FormInput{
    width: 100%;
    margin: 15px 0;
  }
  .MuiFormControl-root{
    width: 100%;
  }
  .FormSubmit{
    margin: 15px 0;
    width:auto;
    display: flex;
    align-items: center;
  }
`;

const InactiveField = styled(TextField)`
  .MuiFilledInput-root{
    background:none;
  }
`;

function SettingsForm (props){
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [repeatSenha, setRepeatSenha] = useState('');

  const editable = props.editable;

  const [values, setValues] = useState({
    amount: '',
    password: '',
    rePassword: '',
    showRePassword: false,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowRePassword = () => {
    setValues({ ...values, showRePassword: !values.showRePassword });
  };

  const handleMouseDownRePassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/rotaSettings', {
      nome,
      username,
      senha,
      repeatSenha
    })

    window.location.reload(false);
  }

  function handlePass(event){
    handleChange('password');
    setSenha(event.target.value);
  }

  function handleRePass(event){
    handleChange('rePassword');
    setRepeatSenha(event.target.value);
  }

  if(editable){
    return (
      <FormWrapper noValidate autoComplete="off">
        <form onSubmit={handleSubmit}>
          <FormControl className="FormInput">
            <TextField id="name-input" label="Name" variant="filled" value={nome} onChange={event => setNome(event.target.value)}/>
          </FormControl>

          <FormControl className="FormInput">
            <TextField id="username-input" label="Username" variant="filled" value={username} onChange={event => setUsername(event.target.value)}/>
          </FormControl>

          <FormControl className="FormInput">
            <InputLabel variant="filled" htmlFor="input-password">Password</InputLabel>
            <FilledInput
              id="input-password"
              type={values.showPassword ? 'text' : 'password'}
              value={senha}
              onChange={event => handlePass(event)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {values.showPassword ? <i className="material-icons">visibility</i> : <i className="material-icons">visibility_off</i>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className="FormInput">
            <InputLabel variant="filled" htmlFor="input-repassword">Repeat Password</InputLabel>
            <FilledInput
              id="input-repassword"
              type={values.showRePassword ? 'text' : 'password'}
              value={repeatSenha}
              onChange={event => handleRePass(event)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle rePassword visibility"
                    onClick={handleClickShowRePassword}
                    onMouseDown={handleMouseDownRePassword}
                    edge="end"
                  >
                    {values.showRePassword ? <i className="material-icons">visibility</i> : <i className="material-icons">visibility_off</i>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> 
          <FormControl className="FormSubmit">
              <TextIconButton type="submit" text="Save" icon="done"/>
          </FormControl>
        </form>
      </FormWrapper>
    );
  }
  else{
    return (
      <FormWrapper noValidate autoComplete="off">
        <FormControl className="FormInput">
          <InactiveField id="name-input" label="Name" variant="filled" defaultValue={nome}
          InputProps={{
            readOnly: true,
          }} />
        </FormControl>

        <FormControl className="FormInput">
          <InactiveField id="username-input" label="Username" variant="filled" value={username}
          InputProps={{
            readOnly: true,
          }}/>
        </FormControl>
      </FormWrapper>
    );
  }
}
 
export { SettingsForm };