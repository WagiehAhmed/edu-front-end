import React from 'react'
import { CustomListItem, TemporaryDrawer } from '../../styles/drawers';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import { colors } from '../../styles/theme';
import { UserData, UserImage, UserName, CustomButton } from '../../styles/common';




const TemporaryDrawerComponent = ({matches,drawerwidth,drawerTriggerHandler,navHandler,active,mobileOpen}) => {


  const drawer = (
    <Box>
      {/* <Toolbar/> */}
      <UserData>
        <UserImage src="../images/manProfile.png" />
        <UserName variant="body1">wagieh ahmed</UserName>
        {/* <UserType variant="body2">student</UserType> */}
        <CustomButton onClick={()=>{navHandler("profile")}}>view profile</CustomButton>
      </UserData>
      <List>
        {["tracks", "about", "contact"].map(
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
  )
}

export default TemporaryDrawerComponent
