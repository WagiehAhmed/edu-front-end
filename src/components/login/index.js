import React, { useState } from "react";
import { CustomTextFeild, FormContainer } from "../../styles/common";
import { LoginButton } from "../../styles/login";
import { InputAdornment } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';




const Login = ({ matches }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    console.log("userName", userName);
    console.log("password", password);
  };

  return (
    <FormContainer matches={matches}>
      <CustomTextFeild
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon color={userName?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="userName"
        name="userName"
        variant="outlined"
        type="text"
        required
        placeholder="UserName/Email"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <CustomTextFeild
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon color={password?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="password"
        name="password"
        variant="outlined"
        type="password"
        required
        placeholder="Passworud"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <LoginButton onClick={loginHandler} startIcon={<LoginIcon/>}>login</LoginButton>
    </FormContainer>
  );
};

export default Login;
