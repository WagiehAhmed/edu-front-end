import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

export const DrawerContainer = styled(Box)(() => ({
  width: "100%",
  // height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

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
    // marginTop: "64px",
    backgroundColor: "red",
    // border: "2px solid red",
  },
}));

export const MainContainer = styled(Box)(({ drawerwidth, matches }) => ({
  width: matches ? "100%" : `calc(100% - ${drawerwidth}px)`,
  minHeight: matches ? `calc(100vh - 64px)` : `calc(100% - 64px)`,
  marginLeft: matches ? "0px" : `${drawerwidth}px`,
  padding: "5px",
  position:"relative",
  zIndex:"-1",
  border: "2px solid red",
}));

export const UserData = styled(Box)(() => ({
  height: "200px",
  // paddingTop: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "2px solid green",
}));
export const UserImage = styled(Avatar)(({ src }) => ({
  src: `${src}`,
  width: "60px",
  height: "60px",
}));
export const UserName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "5px",
}));
// export const UserType = styled(Typography)(() => ({
//   padding: "2px",
// }));

export const ViewProfileButton = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  padding: "5px 10px",
  marginTop: "20px",
  borderRadius: "50px",
  color: `${colors.white}`,
  backgroundColor: `${colors.primary}`,
  "&:hover": {
    backgroundColor: `${colors.primary}`,
    scale: "1.05",
  },
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

export const CustomListItem = styled(ListItem)(() => ({
  // border:"2px solid green",
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
}));

export const CustomMenuItem = styled(MenuItem)(() => ({
  textTransform: "capitalize",
  "&:hover": {
    cursor: "pointer",
    color: `${colors.primary}`,
  },
}));
