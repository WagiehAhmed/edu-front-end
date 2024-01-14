import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import {
  CustomDivider,
  HeaderTitle,
  ProfileContainer,
  UpdateButton,
} from "../../styles/profile";
import { CustomTextFeild, FormContainer } from "../../styles/common";




import ImageIcon from '@mui/icons-material/Image';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';


const UpdateProfile = ({ matches }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const updateHandler = () => {
    console.log("userName", userName);
    console.log("password", password);
  };


  return (
    <ProfileContainer>
      <HeaderTitle variant={matches ? "h6" : "h4"}>update profile</HeaderTitle>
      <CustomDivider />
        <FormContainer  matches={matches}>
          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="userName"
            name="userName"
            variant="outlined"
            type="text"
            required
            placeholder="UserName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="email"
            name="email"
            variant="outlined"
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="oldPassword"
            name="oldPassword"
            variant="outlined"
            type="password"
            required
            placeholder="Old Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="NewPassword"
            name="NewPassword"
            variant="outlined"
            type="password"
            required
            placeholder="New Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="confirmNewPassword"
            name="confirmNewPassword"
            variant="outlined"
            type="password"
            required
            placeholder="Contirm New Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <CustomTextFeild
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImageIcon   color="primary"/>
              </InputAdornment>
            ),
          }}
            key="image"
            name="image"
            variant="outlined"
            type="file"
            accept="image/*"
            required
            value={image}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <UpdateButton onClick={updateHandler} startIcon={<UpdateIcon/>}>update</UpdateButton>
        </FormContainer>
    </ProfileContainer>
  );
};

export default UpdateProfile;
