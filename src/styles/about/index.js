import styled from "@emotion/styled";
import { Box, Button, FormControl, Stack, Typography } from "@mui/material";
import { colors } from "../theme";

export const AboutContainer = styled(Box)(() => ({
  padding: "10px",
  width: "100%",
  height: "100%",
  border: "2px solid red",
}));

export const AboutInfo = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
//   justifyContent: "space-evenly",
//   alignItems: matches ? "center" : "stretch",
  margin: "10px auto",
  border: "2px solid green",
  minHeight:"500px",
}));

export const AboutContent = styled(Stack)(({ matches }) => ({
  maxWidth: "840px",
  minWidth: "300px",
  flexDirection: "column",
  justifyContent: "center",
  padding: "30px",
  border: "2px solid yellow",
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
  maxWidth: "840px",
  minWidth: "300px",
  border: "2px solid red",
}));
export const AboutImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  // maxWidth:matches?"100%":"1000px",
  // maxHeight:matches?"100%":"600px",
  // border:"2px solid green",
  // flexGrow:1,
}));

// fsdfasdfasdfasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffff

//   export const AboutItemLearmMore = styled(Button)(() => ({
//     backgroundColor: `${colors.primaryText}`,
//     textTransform: "capitalize",
//     width:"fit-content",
//     color: "white",
//     "&:hover": {
//       backgroundColor: `${colors.green}`,
//       letterSpacing: "1px"
//     },
//   }));

//   export const AboutItemOptions = styled(Stack)(() => ({
//     color: "#293635",
//     // border: "2px solid red",
//     // maxWidth: "fit-content",
//     flexDirection: "row",
//     flexWrap:'wrap',
//     justifyContent: "space-evebnly",
//     alignItems: "center",
//     margin: "15px 0px",
//     padding: "5px 0px",
//   }));

//   export const AboutItemOption = styled(Button)(() => ({
//     color: `${colors.primaryText}`,
//     flexGrow:1,

//     "&:hover": {
//       color: `${colors.white}`,
//       backgroundColor: `${colors.green}`,
//     },
//     backgroundColor: `${colors.iconContainer}`,
//     border: `1px solid ${colors.green}`,
//     textTransform: "capitalize",
//     fontSize: "1em",
//     margin: "5px",
//   }));
