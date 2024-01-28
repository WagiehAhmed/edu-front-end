import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

export const MainContainer = styled(Container)(({ matches }) => ({
  width: "100%" ,
  // minHeight: "100dvh",
  backgroundColor: `${colors.white}`,
  // backgroundColor: "rgba(0,0,0,0.1)",
  position:"relative",
  boxSizing:"border-box",
  zIndex:"0",
  padding:"0px !important",
  marginBlock:'20px',
  // border: "2px solid blue",
}));

export const TemporaryDrawer = styled(Drawer)(({ drawerwidth, matches }) => ({
  display: matches ? "block" : "none",
  "& .MuiDrawer-paper": { width: drawerwidth },
  zIndex:"1",
}));

export const CustomListItem = styled(ListItem)(() => ({
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
  // border:"2px solid green",
}));