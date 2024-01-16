import { Box, Button, Divider, FormControl, Grid, Stack, Typography, styled } from "@mui/material";
import { colors } from "../theme";

export const ProfileContainer = styled(Box)(() => ({
  padding: "10px",
}));



export const HorezontalStack = styled(Stack)(( ) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "5px",
    // border: "2px solid blue",
}));
export const VericalStack = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "spacee-between",
  marginLeft: "5px",
    // border: "2px solid green",
}));

export const ActionItemsContainer = styled(Grid)(() => ({
  // backgroundColor:"red",
}));

export const ActionItemContainer = styled(Grid)(() => ({
  padding:"10px",
  // backgroundColor:"green",
}));

export const ActionItem = styled(Grid)(() => ({
  minWidth: "200px",
  maxWidth: "500px",
  margin: "0px auto",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#E5E7E4",
  boxShadow:
  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  "&:hover":{
    transform:"scale(1.05,1.05)",
  },
  // border: "2px solid red",
}));




export const Container = styled(Box)(() => ({
    boxSizing: "border-box",
    borderRadius:"10px",
    margin: "25px auto",
    padding: "10px",
    width: "fit-content",
    height: "100%",
    backgroundColor: `${colors.white}`,
    boxShadow:"rgba(0, 0, 0, 0.1) 5px 5px 10px, rgba(0, 0, 0, 0.1) 5px 5px 10px",
    // border: "2px solid red",
  }));



  export const UpdateButton = styled(Button)(()=>({
    textTransform: "capitalize",
    alignSelf:"center",
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


