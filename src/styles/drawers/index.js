import {
  Avatar,
  Box,
  Button,
  Drawer,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

// export const DrawerContainer = styled(Box)(() => ({
//   width: "100%",
//   // height: "100vh",
//   display: "flex",
//   flexDirection: "column",
// }));



export const MainContainer = styled(Box)(({ drawerwidth, matches }) => ({
  width: matches ? "100%" : `calc(100% - ${drawerwidth}px)`,
  minHeight: matches ? `calc(100vh - 60px)` : `calc(100% - 64px)`,
  marginLeft: matches ? "0px" : `${drawerwidth}px`,
  backgroundColor: "#EEE",
  padding: "5px",
  position:"relative",
  boxSizing:"border-box",
  border: "2px solid red",
  zIndex:"0",
}));

export const TemporaryDrawer = styled(Drawer)(({ drawerwidth, matches }) => ({
  display: matches ? "block" : "none",
  "& .MuiDrawer-paper": { width: drawerwidth },
  zIndex:"1",
}));
export const PermanentDrawer = styled(Drawer)(({ drawerwidth, matches }) => ({
  display: matches ? "none" : "block",
  "& .MuiDrawer-paper": {
    width: drawerwidth,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    zIndex:"1",
    // border: "2px solid red",
  },
}));

export const CustomListItem = styled(ListItem)(() => ({
  // border:"2px solid green",
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
}));