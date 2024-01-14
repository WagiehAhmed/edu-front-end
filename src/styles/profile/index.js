import { Box, Button, Divider, FormControl, Stack, Typography, styled } from "@mui/material";
import { colors } from "../theme";

export const ProfileContainer = styled(Box)(() => ({
  padding: "10px",
}));
export const CustomDivider = styled(Divider)(() => ({
  margin: "10px",
}));
export const HeaderTitle = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  fontWeight: "bold",
  color: `${colors.gray}`,
}));

export const HorezontalStack = styled(Stack)(({ in_center }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: in_center ? "center" : "flex-start",
  alignItems: "center",
  marginBottom: "5px",
  paddingBottom: "15px",
  //   border: "2px solid blue",
}));
export const VericalStack = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "spacee-between",
  marginLeft: "5px",
  //   border: "2px solid blue",
}));

export const ActionItem = styled(Box)(() => ({
  flexGrow: 1,
  minWidth: "250px",
  maxWidth: "500px",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#E5E7E4",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  //   border: "2px solid green",
  "&:hover":{
    transform:"scale(1.05,1.05)",
    // scale: "1.5 1.5"
  }
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


