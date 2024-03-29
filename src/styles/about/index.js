import styled from "@emotion/styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { colors } from "../theme";

import { Avatar, Paper } from "@mui/material";



export const AboutInfo = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
  // border: "2px solid green",
}));

export const AboutContent = styled(Stack)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  // border: "2px solid yellow",
}));

export const AboutTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.primaryText}`,
  fontSize: matches ? "2em" : "3em",
  fontWeight: "bold",
  textTransform: "capitalize",
}));

export const AboutDescription = styled(Typography)(() => ({
  color: `${colors.secondaryText}`,
  textTransform: "capitalize",
  marginBottom: "10px",
  lineHeight: "35px",
  "&:hover": {
    color: `${colors.primaryText}`,
  },
}));

export const AboutImageContaimer = styled(Box)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  // border: "2px solid red",
}));

export const AboutImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));




export const HorezontalStack = styled(Stack)(({ in_center }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: in_center ? "center" : "flex-start",
  alignItems: "center",
  margin: "5px",
  // paddingBottom: "15px",
    // border: "2px solid blue",
}));

export const VericalStack = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "spacee-between",
  marginLeft: "5px",
    // border: "2px solid green",
}));


export const ActionsContainer = styled(Stack)(({ in_center }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: in_center ? "center" : "flex-start",
  alignItems: "center",
  margin: "10px",
  padding: "10px",
  // paddingBottom: "15px",
    // border: "2px solid blue",
}));




export const ActionItemsContainer = styled(Grid)(() => ({
  // backgroundColor:"red",
  padding:"20px 0px"
}));

export const ActionItemContainer = styled(Grid)(() => ({
  padding:"10px",
  // backgroundColor:"green",
}));

export const ActionItem = styled(Box)(() => ({
  minWidth: "250px",
  maxWidth: "500px",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: `${colors.backgroundSecondary}`,
  boxShadow:"rgba(0, 0, 0, 0.3) 10px 20px 38px, rgba(0, 0, 0, 0.22) 10px 20px 12px, rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "&:hover":{
      transform:"scale(1.05,1.05)",
    }
    //   border: "2px solid green",
}));

export const ReviewsContainer = styled(Box)(() => ({
  backgroundColor: "white",
  backgroundColor:"transparent",
  padding: "20px 0px 40px 0px",
}));


export const ReviewItemContainer = styled(Paper)(({ matches }) => ({
//   border: "2px solid red",
cursor:"pointer",
  display:"flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: matches ? "250px" : "300px",
  margin: "20px auto",
  padding: "5px",
  boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
  backgroundColor: `${colors.backgroundSecondary}`,
}));


export const ReviewItemHeader = styled(Stack)(() => ({
//   border: "2px solid green",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export const ReviewItemHeaderImage = styled(Avatar)(({ src }) => ({
//   border: "2px solid red",
  src: `url(${src})`,
  margin: "5px",
  width: "56px",
  height: "56px",
}));

export const ReviewItemHeaderData = styled(Stack)(() => ({
//   border: "2px solid purple",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems:"center",
}));

export const ReviewItemHeaderName = styled(Typography)(() => ({
  color: `${colors.primaryText}`,
  fontSize: "1.5em",
  textTransform: "capitalize",
}));

export const ReviewItemText = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
  lineHeight: "30px",
  color: `${colors.secondaryText}`,
  "&:hover":{
  color: `${colors.primaryText}`,
  }
}));



