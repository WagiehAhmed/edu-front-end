import styled from "@emotion/styled";
import { AppBar, Box, IconButton, MenuItem, TextField, Toolbar } from "@mui/material";
import { colors } from "../theme";



export const MainAppBar = styled(AppBar)(({ drawerwidth, matches }) => ({
    position: "fixed",
    top: "0px",
    width: "100%",
    zIndex:"2",
    marginLeft: matches ? "0px" : `${drawerwidth}px`,
    // width: matches ? "100%" : `calc(100% - ${drawerwidth}px)`,
  }));
  
  export const MainToolBar = styled(Toolbar)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // border: "2px solid green",
  }));
  
  export const CustomAppBarContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "2px solid green",
  }));

  export const IconContainer = styled(IconButton)(() => ({
    color: "inherit",
    width: "40px",
    height: "40px",
    margin: "1px",
    backgroundColor: `${colors.iconContainer}`,
    "&:hover": {
      backgroundColor: `${colors.white}`,
      scale: "1.1",
    },
    // border: "2px solid red"
  }));
  
  export const SearchBox = styled(Box)(({ matches }) => ({
    maxWidth: matches ? "400px" : "600px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid red"
  }));
  
export const SearchTextFeild = styled(TextField)(() => ({
    flexGrow: 1,
    backgroundColor: "#ECEEEB",
    marginRight: "5px",
    borderRadius: "50px",
    "& .MuiInputBase-root": {
        borderRadius: "50px",
        margin:"-1px"
      },
    "& .MuiInputBase-input": {
        borderRadius: "50px",
        padding:"10px",
      },
    // border: "2px solid red",
  }));
  export const CustomMenuItem = styled(MenuItem)(() => ({
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      color: `${colors.primary}`,
    },
  }));
  