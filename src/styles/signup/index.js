import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { colors } from "../theme";

export const SignupButton = styled(Button)(()=>({
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