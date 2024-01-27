import React, { forwardRef } from "react";
import {
  Container,
  CustomDivider,
  CustomForm,
  CustomFormControl,
  CustomFormLabel,
  CustomLink,
  CustomTextFeild,
  HeaderTitle,
} from "../../styles/common";
import { useState } from "react";
import { SignupButton } from "../../styles/signup";
import PersonIcon from "@mui/icons-material/Person";
import ImageIcon from "@mui/icons-material/Image";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Alert, InputAdornment, Slide, Snackbar } from "@mui/material";
import { registerValidationSchema } from "../../util/validation/validation";
import axios from "axios";

import FormData from "form-data";
import { serverUrl } from "../../util/serverUrl";
import { useNavigate } from "react-router-dom";

const SnackBarAlert = forwardRef(function SnSnackBarAlert(props, ref) {
  return <Alert elevation={6} {...props} ref={ref} />;
});
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Signup = ({ matches }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openWarningAlert, setOpenWarningAlert] = useState(false);
  const [openInfoAlert, setOpenInfoAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  

  const fd = new FormData();
  // register handler
  const signupHandler = async (e) => {
    e.preventDefault();
    const { error } = registerValidationSchema.validate({
      email,
      name,
      password,
    });
    if (!error) {
      if (password === confirmPassword) {
        fd.append("email", email);
        fd.append("name", name);
        fd.append("password", password);
        fd.append("image", image);
        try {
          const { data } = await axios({
            method: "POST",
            url: `${serverUrl}/users/register`,
            data: fd,
          });
          setOpenSuccessAlert(true);
          setAlertMessage(data.message);
        } catch (err) {
          setOpenErrorAlert(true);
          setAlertMessage(err.response.data.message);
        }
      } else {
        setOpenWarningAlert(true);
        setAlertMessage("check you password please.");
      }
    } else {
      setOpenWarningAlert(true);
      setAlertMessage(error.details[0].message);
    }
  };

  // close alert
  const closeAlert = () => {
    setOpenErrorAlert(false);
    setOpenInfoAlert(false);
    setOpenSuccessAlert(false);
    setOpenWarningAlert(false);
  };

  // go to login
  const navigate = useNavigate();
  const goToLogin = () => {
      navigate("/login", { replace: false });
  };

  return (
    <Container>
      <CustomForm matches={matches} encType="multipart/form-data">
        <CustomFormControl matches={matches}>
          <CustomFormLabel className="new-account">new account</CustomFormLabel>
          <CustomFormLabel>
            have an account?
            <CustomLink onClick={goToLogin}>Login!</CustomLink>
          </CustomFormLabel>
          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color={name ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="name"
            name="name"
            variant="outlined"
            type="text"
            required
            label="UserName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            type="email"
            required
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color={password ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="password"
            name="password"
            variant="outlined"
            type="password"
            required
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <CustomTextFeild
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color={confirmPassword ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            key="confirmPassword"
            name="confirmPassword"
            variant="outlined"
            type="password"
            required
            label="Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
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

          <SignupButton
            onClick={(e) => signupHandler(e)}
            startIcon={<HowToRegIcon />}
            type="submit"
          >
            sign up
          </SignupButton>
        </CustomFormControl>
      </CustomForm>

      {/* notification section */}
      <Snackbar
        open={
          openErrorAlert ||
          openInfoAlert ||
          openSuccessAlert ||
          openWarningAlert
        }
        TransitionComponent={SlideTransition}
        onClose={closeAlert}
      >
        <SnackBarAlert
          severity={
            openErrorAlert
              ? "error"
              : openInfoAlert
              ? "info"
              : openSuccessAlert
              ? "success"
              : "warning"
          }
          onClose={closeAlert}
        >
          {alertMessage}
        </SnackBarAlert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
