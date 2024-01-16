import { Avatar, Box, Button, Divider, FormControl, IconButton, TextField, Typography, styled } from "@mui/material";
import { colors } from "../theme";



export const FormContainer = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: matches ? "80%" : "40%",
  minWidth: matches?"300px":"400px",
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
  width: "80px",
  height: "80px",
}));

export const UserName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  fontWeight: "bold",
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


  

  // '& label.Mui-focused': {
  //   color: '#A0AAB4',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: '#B2BAC2',
  // },
  // '& .MuiOutlinedInput-root': {
  //   '& fieldset': {
  //     borderColor: '#E0E3E7',
  //   },
  //   '&:hover fieldset': {
  //     borderColor: '#B2BAC2',
  //   },
  //   '&.Mui-focused fieldset': {
  //     // borderColor: '#6F7E8C',
  //     borderColor: 'red',
  //   },
  // },










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

export const CustomDivider = styled(Divider)(() => ({
  margin: "10px",
}));

export const HeaderTitle = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  fontWeight: "bold",
  color: `${colors.textSecondary}`,
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

