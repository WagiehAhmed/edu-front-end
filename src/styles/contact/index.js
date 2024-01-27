import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../theme";

export const ContactInfo = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
  // border: "2px solid green",
}));

export const ContactContent = styled(Box)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  // position: "relative",
  // flexDirection: "column",
  // justifyContent: "center",
  padding: "10px",
  // border: "2px solid blue",
}));

export const FormControlContainer = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: "100%",
  height:"100%",
  padding: matches ? "20px 10px" : "20px",
  backgroundColor: `${colors.white}`,
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border:"2px solid green",
}));

export const FormContainer = styled("form")(({ matches }) => ({
  maxWidth:matches?"450px":"550px",
  margin:matches?"70px auto":"100px auto",
  // border:"2px solid red",
}));

export const ContactImageContaimer = styled(Box)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  // border: "2px solid red",
}));

export const ContactImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));

export const SendButton = styled(Button)(() => ({
  textTransform: "capitalize",
  alignSelf: "center",
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

export const ContactTitle = styled(Typography)(({ matches }) => ({
  alignSelf: "center",
  color: `${colors.primaryText}`,
  fontSize: matches ? "1em" : "2em",
  fontWeight: "bold",
  marginBottom: "25px",
  textTransform: "capitalize",
}));

export const ActionItemsContainer = styled(Grid)(() => ({
    padding: "20px 0px",
    //   backgroundColor:"red",
}));

export const ActionItemContainer = styled(Grid)(() => ({
  padding: "10px",
//   backgroundColor:"green",
}));

export const ActionItem = styled(Stack)(() => ({
  minWidth: "250px",
  maxWidth: "350px",
  margin: "10px auto",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: `${colors.backgroundSecondary}`,
  boxShadow:
    "rgba(0, 0, 0, 0.3) 10px 20px 38px, rgba(0, 0, 0, 0.22) 10px 20px 12px, rgba(0, 0, 0, 0.35) 0px 5px 15px",

  "&:hover": {
    transform: "scale(1.05,1.05)",
  },

  justifyContent: "center",
    alignItems:"center",
  //   border: "2px solid green",
}));
