import { Avatar, Box, Button, FormControl, IconButton, TextField, Typography, styled } from "@mui/material";
import { colors } from "../theme";



export const FormContainer = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: matches ? "80%" : "40%",
  minWidth:"300px",
  maxWidth:"500px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transformOrigin:"center certer",
  transform: "translate(-50%,-50%)",
  padding: matches ? "20px 10px" : "20px",
  backgroundColor: `${colors.white}`,
  boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border:"2px solid green",
}));

export const CustomTextFeild = styled(TextField)(() => ({
  flexGrow: 1,
  justifySelf:"center",
  // backgroundColor: "#ECEEEB",
  backgroundColor: "#ECEEEB",
  marginBottom: "15px",
  borderRadius: "50px",
  "& .MuiInputBase-root": {
    borderRadius: "50px",
    margin:"-1px",
  },
  "& .MuiInputBase-input": {
    padding:"10px ",
    borderRadius: "50px",
  },


}));




export const UserData = styled(Box)(() => ({
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "2px solid green",
}));

export const UserImage = styled(Avatar)(({ src }) => ({
  src: `${src}`,
  width: "100px",
  height: "100px",
}));

export const UserName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  fontWeight: "bold",
}));

export const CustomButton = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  padding: "5px 10px",
  borderRadius: "50px",
  color: `${colors.white}`,
  backgroundColor: `${colors.primary}`,
  "&:hover": {
    backgroundColor: `${colors.primary}`,
    scale: "1.05",
  },
}));


export const IconContainer = styled(IconButton)(() => ({
  color: "inherit",
  width: "40px",
  height: "40px",
  margin: "1px",
  border: `1px solid ${colors.primary}`,
  backgroundColor: `${colors.iconContainer}`,
  "&:hover": {
    backgroundColor: `${colors.white}`,
    scale: "1.1",
  },
  // border: "2px solid red"
}));

