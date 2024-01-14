import React, { useRef } from 'react'
import { CustomTextFeild, FormContainer } from '../../styles/common';
import { useState } from 'react';
import { SignupButton } from '../../styles/signup';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { InputAdornment } from '@mui/material';


const Signup = ({matches}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const imageRef = useRef();

  const signupHandler = () => {
    console.log("userName",userName);
    console.log("password",password);

  }
  
  return (
      <FormContainer matches={matches}>
        <CustomTextFeild 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color={userName?"primary":"inherit"}/>
              </InputAdornment>
            ),
          }}
        key="userName" name="userName" variant="outlined" type="text" required placeholder="UserName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <CustomTextFeild 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon color={email?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="email" name="email" variant="outlined" type="text" required placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <CustomTextFeild 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon  color={password?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="password" name="password" variant="outlined" type="password" required placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <CustomTextFeild 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon color={confirmPassword?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="confirmPassword" name="confirmPassword" variant="outlined" type="password" required placeholder="Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        
        <CustomTextFeild
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ImageIcon  color={image?"primary":"inherit"}/>
            </InputAdornment>
          ),
        }}
        key="image" name="image" variant="outlined" type="file" accept="image/*" required onChange={(e)=>{setImage(e.target.files[0])}}/>
        
        <SignupButton onClick={signupHandler} startIcon={<HowToRegIcon/>}>sign up</SignupButton>
      </FormContainer>
  );
}

export default Signup
