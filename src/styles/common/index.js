import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

// containers ............................................................................
export const Container = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  border: "2px solid red",
}));

export const HeaderContainer = styled(Box)(({ matches }) => ({
  width: "100%",
  height: matches ? "100px" : "150px",
  paddingLeft: matches ? "60px" : "350px",
  textTransform: "capitalize",
  display: "flex",
  flexDirection:"row",
  alignItems:"center",
  background: "linear-gradient(45deg,#011465, #040205)",
  // border: "2px solid red",
}));

export const MainHeader = styled(Typography)(({ matches }) => ({
 width:"fit-content",
  textTransform: "capitalize",
  fontSize: matches?"20px":"40px",
  fontWeight: "bold",
  color: `${colors.white}`,
  // border: "2px solid green",
}));

// forms section ...........................................................................
export const CustomForm = styled("form")(({ matches }) => ({
  width: matches ? "80%" : "40%",
  minWidth: matches ? "200px" : "400px",
  maxWidth: "100%",
  margin: "0px auto",
  border: "2px solid green",
}));

export const CustomFormControl = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  padding: matches ? "10px" : "20px",

  // boxShadow:
  //   "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border: "2px solid green",
}));

export const CustomFormLabel = styled(FormLabel)(() => ({
  textAlign: "center",
  padding: "10px",
  margin: "10px 0px",
  // border: "2px solid red",
  color: `${colors.black}`,
  "&::first-letter": {
    textTransform: "capitalize",
  },
  "&.new-account": {
    fontWeight: "bold",
  },
}));

export const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  textTransform: "capitalize",
  padding: "0px",
  margin: "5px 0px",
  // border: "2px solid red",
}));

export const CustomTextFeild = styled(TextField)(() => ({
  flexGrow: 1,
  marginBottom: "15px",


  "&.search-feild":{
    // flexGrow:0,
    margin:'0px',
    maxWidth:"500px",
  }
  // backgroundColor: "#ECEEEB",
  // borderRadius: "50px",
  // border:"2px solid green",
  // "& .MuiInputBase-root": {
  //   borderRadius: "50px",
  // },
  // "& .MuiInputBase-input": {
  //   padding:"10px ",
  //   borderRadius: "50px",
  // },

  // '& .MuiOutlinedInput-root': {
  //   '& fieldset': {
  //     // borderColor: `${colors.white}`,
  //   },
  //   '&:hover fieldset': {
  //     margin:"-1px",
  //     borderColor: `${colors.textSecondary}`,
  //   },
  //   '&.Mui-focused fieldset': {
  //     margin:"-1px",
  //     borderColor: `${colors.primary}`,
  //   },
  // },
}));
export const CustomMultilineTextFeild = styled(TextField)(() => ({
  flexGrow: 1,
  // marginBottom: "15px",
  // backgroundColor: "#ECEEEB",
  // borderRadius: "10px",
  // "& .MuiInputBase-root": {
  //   borderRadius: "10px",
  //   padding:"5px"
  // },
  // "& .MuiInputBase-input": {
  //   padding:"5px ",
  //   borderRadius: "10px",
  // },

  // '& .MuiOutlinedInput-root': {
  //   '& fieldset': {
  //     borderColor: `${colors.white}`,
  //   },
  //   '&:hover fieldset': {
  //     margin:"-1px",
  //     borderColor: `${colors.textSecondary}`,
  //   },
  //   '&.Mui-focused fieldset': {
  //     margin:"-1px",
  //     borderColor: `${colors.primary}`,
  //   },
  // },
}));

export const CustomButton = styled(Button)(() => ({
  textTransform: "capitalize",
  // width: "fit-content",
  // padding: "5px 10px",
  // borderRadius: "50px",
  // color: `${colors.white}`,
  // backgroundColor: `${colors.primary}`,
  // "&:hover": {
  //   backgroundColor: `${colors.primary}`,
  //   scale: "1.05",
  // },
}));

export const CustomLink = styled(Link)(() => ({
  textTransform: "capitalize",
  textDecoration:"none",
  color: `${colors.primary}`,
  "&:hover": {
    cursor: "pointer",
  },
}));

// user section ............................................................................
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
  "&.lock-open":{
    backgroundColor: "transparent",
    margin: "2px",
    border: "none",
  },
  "&.enrolled-students":{
    backgroundColor: "transparent",
    margin: "2px",
    border: "none",
  },
  "&:hover": {
    backgroundColor: `${colors.white}`,
    scale: "1.1",
  },
  // border: "2px solid red"
}));

export const CloseIconContainer = styled(IconButton)(() => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  zIndex: 1,
  color: `${colors.white}`,
  width: "40px",
  height: "40px",
  margin: "1px",
  cursor: "auto",
  backgroundColor: `${colors.primary}`,

  "&:before": {
    content: "''",
    borderRadius: "50%",
    position: "absolute",
    top: "35%",
    left: "65%",
    transform: "translate(-50%,-50%)",
    zIndex: -1,
    width: "200%",
    height: "200%",
    backgroundColor: `${colors.primary}`,
    // border: "2px solid red",
  },
  "&:hover": {
    "&:before": {
      backgroundColor: "red",
    },
  },
}));

// search section ..........................................................................
export const SearchStack= styled(Stack)(() => ({
  padding:"25px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  border: "2px solid red",
}));

// dialog section ..........................................................................
export const CustomDialog = styled(Dialog)(() => ({
  backgroundColor: "rgba(0,0,100,0.5)",
}));

export const CustomDialogContent = styled(DialogContent)(() => ({
  position: "relative",
  overflow: "hidden",
  padding: "20px 0px",
  maxWidth: "500px",
  minWidth: "250px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "white",
  alignItems: "center",
  backgroundColor: "transparent",
   border: "2px solid red"
}));
