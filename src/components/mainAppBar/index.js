import React, { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";


import {
    CustomAppBarContainer,
    CustomMenuItem,
    IconContainer,
    MainAppBar,
  MainToolBar,
  SearchBox,
  SearchTextFeild,
} from "../../styles/mainAppBar";
import { IconButton, InputAdornment, Menu, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainAppBarComponent = ({matches,drawerwidth,navigate,drawerTriggerHandler}) => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const searchQueryChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  
  const loginHandler = () => {
    closeMenuHandler();
    navigate("login", { replace: true });
  };

  const signupHandler = (e) => {
    closeMenuHandler();
    navigate("signup", { replace: true });
  };



  return (
    <MainAppBar drawerwidth={drawerwidth} matches={matches} >
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
          <IconContainer onClick={openMenuHandler}>
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
  );
};

export default MainAppBarComponent;
