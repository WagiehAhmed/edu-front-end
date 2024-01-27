import React from 'react'
import { Container, CustomDivider, HeaderTitle } from '../../styles/common'

const AddCoursePage = ({matches}) => {
  return (
    <Container>
    <HeaderTitle
      variant={matches ? "h6" : "h4"}
      sx={{ display: "inline-block" }}
    >
      create your new course
    </HeaderTitle>
    <CustomDivider />
    {/* <CustomForm matches={matches} encType="multipart/form-data">
      <CustomFormControl matches={matches}>
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
          placeholder="UserName"
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
                <LockIcon color={password ? "primary" : "inherit"} />
              </InputAdornment>
            ),
          }}
          key="password"
          name="password"
          variant="outlined"
          type="password"
          required
          placeholder="Password"
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
          placeholder="Password"
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
*/}
    {/* notification section */}
    {/* <Snackbar
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
    </Snackbar>  */}
  </Container>
  )
}

export default AddCoursePage
