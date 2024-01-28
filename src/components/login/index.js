import React, { forwardRef, useState } from "react";
import {
  CustomTextFeild,
  CustomFormControl,
  CustomForm,
  CustomFormLabel,
  CustomFormControlLabel,
  CustomLink,
  Container,
} from "../../styles/common";
import { LoginButton } from "../../styles/login";
import { Alert, InputAdornment, Slide, Snackbar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import { loginValidationSchema } from "../../util/validation/validation";

import axios from "axios";
import { serverUrl } from "./../../util/serverUrl";
import { CheckBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SnackBarAlert = forwardRef(function SnSnackBarAlert(props, ref) {
  return <Alert elevation={6} {...props} ref={ref} />;
});
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Login = ({ matches, dialogTriggerHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openWarningAlert, setOpenWarningAlert] = useState(false);
  const [openInfoAlert, setOpenInfoAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // login handler
  const loginHandler = async (e) => {
    e.preventDefault();
    const { error } = loginValidationSchema.validate({ email, password });
    if (!error) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${serverUrl}/users/login`,
          data: { email, password },
        });

        //saving user token and data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setOpenSuccessAlert(true);
        setAlertMessage(data.message);
      } catch (err) {
        setOpenErrorAlert(true);
        setAlertMessage(err.response.data.message);
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

  const navigate = useNavigate();
  // go to sign up
  const goToSignup = () => {
    if (dialogTriggerHandler) {
      dialogTriggerHandler();
    }
    
    navigate("/signup", { replace: false });
  };

  return (
    <Container>
      <CustomForm matches={matches}>
        <CustomFormControl matches={matches}>
          <CustomFormLabel>login to your account</CustomFormLabel>
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
            label="Email"
            variant="outlined"
            type="email"
            required
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
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <CustomFormControlLabel
            label="remember me."
            control={<CheckBox color="primary" />}
          />
          <LoginButton
            type="submit"
            onClick={(e) => loginHandler(e)}
            startIcon={<LoginIcon />}
          >
            login
          </LoginButton>
          <CustomFormLabel>
            don't have an account?
            <CustomLink onClick={goToSignup}>sign up!</CustomLink>
          </CustomFormLabel>
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

export default Login;
