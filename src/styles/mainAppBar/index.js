import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { colors } from "../theme";

// icons section ............................................................................
export const IconStack = styled(Stack)(() => ({
  flexDirection:"row",
  justifyContent: "center", 
  alignItems: "center", 
  textTransform:"capitalize",
  // border: "2px solid red",
}));

// logo section ............................................................................
export const LogoStack = styled(Stack)(({ matches }) => ({
  flexGrow: matches ? 1 : 0,
  flexDirection:"row",
  justifyContent: "center", 
  alignItems: "center", 
  textTransform:"capitalize",
  // border: "2px solid red",
}));

export const LogoText = styled(Typography)(({ matches }) => ({
  textTransform:"capitalize",
  margin:"5px",
  paddingInline:"5px",
  // border: "2px solid red",
}));
export const LogoAvatar = styled(Avatar)(({ src }) => ({
  src:src,
  width:"45px",
  height:"45px",
  // border: "2px solid red",
}));

// appbar section ............................................................................
export const MainAppBar = styled(AppBar)(({ matches, drawerwidth }) => ({
  position: "fixed",
  top: "0px",
  width: "100%",
  zIndex: "2",
  padding: "0px",
  marginLeft: matches ? "0px" : `${drawerwidth}px`,
  // border: "2px solid green",
}));

export const MainToolBar = styled(Toolbar)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  // border: "2px solid red",
}));

// menu section ............................................................................
export const CustomMenuItem = styled(MenuItem)(() => ({
  textTransform: "capitalize",
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
}));

export const CustomList = styled(List)(({matches}) => ({
  display:matches?"none":"flex",
  flexDirection: "row",
  padding: "0px",
  // border: "2px solid yellow",
}));

export const CustomListItem = styled(ListItem)(() => ({
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
  marginLeft:"10px",
  // border: "2px solid green",
}));

export const CustomListItemButton = styled(ListItemButton)(() => ({
   padding:"5px",
  // border: "2px solid green",
}));

export const CustomListItemText = styled(ListItemText)(({active,item}) => ({
   textTransform: "capitalize",
   fontWeight:"bold",
   color: active === item ? `${colors.black}` : "inherit",
  // border: "2px solid green",
}));
