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

export const MainContainer = styled(Container)(({ drawerwidth, matches }) => ({
  width: "100%" ,
  minHeight: `calc(100vh - 64px)`,
  backgroundColor: `${colors.white}`,
  position:"relative",
  boxSizing:"border-box",
  zIndex:"0",
  padding:"0px !important",
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