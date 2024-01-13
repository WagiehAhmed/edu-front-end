import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import {
  CustomAppBarContainer,
  CustomListItem,
  CustomMenuItem,
  DrawerContainer,
  IconContainer,
  MainAppBar,
  MainContainer,
  MainToolBar,
  PermanentDrawer,
  SearchBox,
  SearchTextFeild,
  TemporaryDrawer,
  UserData,
  UserImage,
  UserName,
  UserType,
  ViewProfileButton,
} from "../../styles/drawer";
import { InputAdornment, Menu } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { colors } from "../../styles/theme";
import { CustomTextFeild } from "../../styles/common";

const drawerwidth = 240;

const AppDrawer = ({ matches }) => {
  const [active, setActive] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerTriggerHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenuHandlers = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const navHandler = (item) => {
    if (mobileOpen) {
      drawerTriggerHandler();
    }
    setActive(item);
    navigate(`${item}`, { replace: true });
  };

  const loginHandler = () => {
    closeMenuHandler();
    navigate("login", { replace: true });
  };

  const signupHandler = (e) => {
    closeMenuHandler();
    navigate("signup", { replace: true });
  };

  const drawer = (
    <Box>
      {/* <Toolbar/> */}
      <UserData>
        <UserImage src="./images/a2.jpg" />
        <UserName variant="body1">wagieh ahmed</UserName>
        {/* <UserType variant="body2">student</UserType> */}
        <ViewProfileButton>view profile</ViewProfileButton>
      </UserData>
      <List>
        {["home", "about", "courses", "teachers", "contact"].map(
          (item, index) => (
            <CustomListItem
              key={item}
              disablePadding
              onClick={() => navHandler(item)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "fit-content" }}>
                  {item === "home" ? (
                    <HomeIcon fontSize="medium" color="primary" />
                  ) : item === "about us" ? (
                    <QuestionMarkIcon fontSize="medium" color="primary" />
                  ) : item === "courses" ? (
                    <CastForEducationIcon fontSize="medium" color="primary" />
                  ) : item === "teachers" ? (
                    <SchoolIcon fontSize="medium" color="primary" />
                  ) : (
                    <HeadsetMicIcon fontSize="medium" color="primary" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  sx={{
                    padding: "5px 10px",
                    textTransform: "capitalize",
                    color: active === item ? `${colors.primary}` : "inherit",
                  }}
                />
              </ListItemButton>
            </CustomListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
    <DrawerContainer>
      <CssBaseline />

      <MainAppBar drawerwidth={drawerwidth} matches={matches}>
        
        <MainToolBar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={drawerTriggerHandler}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>


          <CustomAppBarContainer>
            
            {/* logo */}
            <Typography variant="h6" noWrap component="div">
              Edu.
            </Typography>


            {/* search area */}
            <SearchBox matches={matches}>
              <SearchTextFeild
                type="text"
                variant="outlined"
                placeholder="Search"
                onChange={searchQueryChangeHandler}
                value={searchQuery}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {searchQuery ? (
                        <ClearIcon
                          onClick={() => setSearchQuery("")}
                          sx={{ cursor: "pointer" }}
                        />
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              {searchQuery ? (
                <IconContainer disableTouchRipple disableFocusRipple>
                  <SearchIcon color="primary" />
                </IconContainer>
              ) : (
                ""
              )}
            </SearchBox>

            {/* personal area */}
            <IconContainer onClick={openMenuHandlers}>
              <PersonIcon color="primary" />
            </IconContainer>
          </CustomAppBarContainer>

          <Menu
            anchorEl={anchorEl}
            open={anchorEl ? true : false}
            onClose={closeMenuHandler}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <CustomMenuItem onClick={loginHandler}>login</CustomMenuItem>
            <CustomMenuItem onClick={signupHandler}>sign up</CustomMenuItem>
          </Menu>
          
        </MainToolBar>
      </MainAppBar>

     
        <TemporaryDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={drawerTriggerHandler}
          ModalProps={{
            keepMounted: true,
          }}
          drawerwidth={drawerwidth}
          matches={matches}>
          <Toolbar />
          {drawer}
        </TemporaryDrawer>

        <PermanentDrawer
          variant="permanent"
          open
          drawerwidth={drawerwidth}
          matches={matches}>
          <Toolbar />
          {drawer}
        </PermanentDrawer>
    

      <Toolbar />
      <MainContainer drawerwidth={drawerwidth} matches={matches}>
        <Outlet />
      </MainContainer>
    </DrawerContainer>

    sadfasdfasdfasd
    </>
  );
};

export default AppDrawer;
