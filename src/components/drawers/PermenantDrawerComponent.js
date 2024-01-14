import React from "react";
import {
  CustomListItem,
  PermanentDrawer,
} from "../../styles/drawers";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import { colors } from "../../styles/theme";
import { UserData, UserImage, UserName, CustomButton } from "../../styles/common";

const PermenantDrawerComponent = ({
  matches,
  drawerwidth,
  drawerTriggerHandler,
  navHandler,
  active,
}) => {
  const drawer = (
    <Box>
      {/* <Toolbar/> */}
      <UserData>
        <UserImage src="./images/manProfile.png" />
        <UserName variant="body1">wagieh ahmed</UserName>
        {/* <UserType variant="body2">student</UserType> */}
        <CustomButton onClick={()=>{navHandler("profile")}}>view profile</CustomButton>
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
    <PermanentDrawer
      variant="permanent"
      // open
      onClose={drawerTriggerHandler}
      ModalProps={{
        keepMounted: true,
      }}
      drawerwidth={drawerwidth}
      matches={matches}
    >
      <Toolbar />
      {drawer}
    </PermanentDrawer>
  );
};

export default PermenantDrawerComponent;
