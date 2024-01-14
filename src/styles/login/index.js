import styled from "@emotion/styled";
import { Box, Button, FormControl } from "@mui/material";
import { colors } from "../theme";

// export const Container = styled(Box)(() => ({
//   boxSizing: "border-box",
//   borderRadius:"10px",
//   margin: "25px auto",
//   padding: "10px",
//   width: "fit-content",
//   height: "100%",
//   backgroundColor: `${colors.white}`,
//   boxShadow:"rgba(0, 0, 0, 0.1) 5px 5px 10px, rgba(0, 0, 0, 0.1) 5px 5px 10px",
//   border: "2px solid red",
// }));
export const FormContainer = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: matches ? "80%" : "40%",
  minWidth:"400px",
  maxWidth:"500px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transformOrigin:"center certer",
  transform: "translate(-50%,-50%)",
  padding: matches ? "20px 10px" : "20px",
  backgroundColor: `${colors.white}`,
  boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  border:"2px solid green",
}));


export const LoginButton = styled(Button)(()=>({
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