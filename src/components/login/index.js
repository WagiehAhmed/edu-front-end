import React, { useState } from "react";
import { Container, CustomTextFeild,FormContainer } from "../../styles/common";
import { LoginButton } from "../../styles/login";

const Login = ({ matches }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    console.log("userName",userName);
    console.log("password",password);
  }
  
  return (
    <Container>
      <FormContainer matches={matches}>
        <CustomTextFeild key="userName" name="userName" variant="outlined" type="text" required placeholder="UserName/Email" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <CustomTextFeild key="password" name="password" variant="outlined" type="password" required placeholder="Passworud" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <LoginButton onClick={loginHandler}>login</LoginButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
