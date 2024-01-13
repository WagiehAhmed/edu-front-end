import React, { useRef } from 'react'
import { Container, CustomTextFeild, FormContainer } from '../../styles/common';
import { useState } from 'react';
import { SignupButton } from '../../styles/signup';

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
    // <Container>
      <FormContainer matches={matches}>
        <CustomTextFeild key="userName" name="userName" variant="outlined" type="text" required placeholder="UserName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <CustomTextFeild key="email" name="email" variant="outlined" type="text" required placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <CustomTextFeild key="password" name="password" variant="outlined" type="password" required placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <CustomTextFeild key="confirmPassword" name="confirmPassword" variant="outlined" type="password" required placeholder="Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        
        <CustomTextFeild key="image" name="image"  ref={imageRef} variant="outlined" type="file" accept="image/*" required value={image} onChange={(e)=>{setImage(e.target.files[0])}}/>
        
        <SignupButton onClick={signupHandler}>sign up</SignupButton>
      </FormContainer>
    // </Container>
  );
}

export default Signup
