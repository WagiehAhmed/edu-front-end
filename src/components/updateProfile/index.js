import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { ProfileContainer, UpdateButton } from "../../styles/profile";
import {
  Container,
  CustomDivider,
  CustomForm,
  CustomFormControl,
  CustomTextFeild,
  HeaderTitle,
} from "../../styles/common";

import ImageIcon from "@mui/icons-material/Image";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import UpdateIcon from "@mui/icons-material/Update";

const UpdateProfile = ({ matches }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [image, setImage] = useState("");

  const updateHandler = () => {};

  return (
    <Container>
      <HeaderTitle variant={matches ? "h6" : "h4"}>update profile</HeaderTitle>
      <CustomDivider />
      <CustomForm matches={matches}>
        <CustomFormControl matches={matches}>
          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color={userName ? "primary" : "inherit"} />
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
                  <MailIcon color={email ? "primary" : "inherit"} />
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
                  <LockIcon color={oldPassword ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="oldPassword"
            name="oldPassword"
            variant="outlined"
            type="password"
            required
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />

          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color={newPassword ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="NewPassword"
            name="NewPassword"
            variant="outlined"
            type="password"
            required
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />

          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon
                    color={confirmNewPassword ? "primary" : "inherit"}
                  />
                </InputAdornment>
              ),
            }}
            key="confirmNewPassword"
            name="confirmNewPassword"
            variant="outlined"
            type="password"
            required
            placeholder="Contirm New Password"
            value={confirmNewPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
            }}
          />

          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ImageIcon color={image ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="image"
            name="image"
            variant="outlined"
            type="file"
            accept="image/*"
            required
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <UpdateButton
            onClick={updateHandler}
            startIcon={<UpdateIcon />}
            type="submit"
          >
            update
          </UpdateButton>
        </CustomFormControl>
      </CustomForm>
    </Container>
  );
};

export default UpdateProfile;
