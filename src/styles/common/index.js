import { Box, FormControl, InputBase, TextField, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  boxSizing:"border-box",
  position: "relative",
  width: "100%",
  height: "100%",
  border: "2px solid blue",
}));

export const FormContainer = styled(FormControl)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: matches ? "80%" : "40%",
  maxWidth:"500px",
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  padding: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  border:"2px solid green",
}));


export const CustomTextFeild = styled(TextField)(() => ({
  flexGrow: 1,
  justifySelf:"center",
  backgroundColor: "#ECEEEB",
  marginBottom: "10px",
  borderRadius: "50px",
  "& .MuiInputBase-root": {
    borderRadius: "50px",
    margin:"-1px",
  },
  "& .MuiInputBase-input": {
    padding:"10px",
    borderRadius: "50px",
  },
}));
