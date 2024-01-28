import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

import {
  CustomList,
  CustomListItem,
  CustomListItemButton,
  CustomListItemText,
  IconStack,
  LogoAvatar,
  LogoStack,
  LogoText,
  MainAppBar,
  MainToolBar,
} from "../../styles/mainAppBar";
import { IconButton, Slide, Tooltip } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";

import {
  CloseIconContainer,
  CustomDialog,
  CustomDialogContent,
  IconContainer,
} from "../../styles/common";
import { colors } from "../../styles/theme";
import Login from "../login";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const MainAppBarComponent = ({
  matches,
  drawerwidth,
  navHandler,
  active,
  drawerTriggerHandler,
}) => {
  // pofial search section dialog setters
  const [open, setOpen] = React.useState(false);
  const dialogTriggerHandler = () => {
    setOpen(!open);
  };

  return (
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

        {/* logo */}
        <LogoStack matches={matches}>
          <LogoAvatar src="../../images/logo.png" />
          <LogoText variant="h6">edu</LogoText>
        </LogoStack>

        {/* navigation area */}
        <CustomList matches={matches}>
          {["tracks", "about", "contact"].map((item, index) => (
            <CustomListItem
              key={item}
              disablePadding
              onClick={() => navHandler(item)}
            >
              <CustomListItemButton>
                <CustomListItemText
                  primary={item}
                  active={active}
                  item={item}
                />
              </CustomListItemButton>
            </CustomListItem>
          ))}
        </CustomList>

        <IconStack>
          {/* language icon */}
          <Tooltip title="Languages">
            <IconContainer onClick={dialogTriggerHandler}>
              <LanguageIcon color="primary" />
            </IconContainer>
          </Tooltip>
          {/* personal icon */}
          <Tooltip title="Login/Register">
            <IconContainer onClick={dialogTriggerHandler}>
              <PersonIcon color="primary" />
            </IconContainer>
          </Tooltip>
        </IconStack>
        
        {/* login/register dialog section */}
        <CustomDialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={dialogTriggerHandler}
          aria-describedby="alert-dialog-slide-description"
        >
          <CustomDialogContent>
            <CloseIconContainer disableRipple onClick={dialogTriggerHandler}>
              <CloseIcon />
            </CloseIconContainer>
            <Login
              matches={matches}
              dialogTriggerHandler={dialogTriggerHandler}
            />
          </CustomDialogContent>
        </CustomDialog>
      </MainToolBar>
    </MainAppBar>
  );
};

export default MainAppBarComponent;
