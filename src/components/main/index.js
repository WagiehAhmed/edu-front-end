import React, { useState } from "react";
// import AppDrawer from '../drawer';
import { Box, Toolbar } from "@mui/material";
import MainAppBarComponent from "../mainAppBar";
import TemporaryDrawerComponent from "../drawers/TemporaryDrawerComponent";
import { Outlet, useNavigate } from "react-router-dom";
import PermenantDrawerComponent from "../drawers/PermenantDrawerComponent";
import { DrawerContainer, MainContainer } from "../../styles/drawers";

const Main = ({ matches }) => {
  const drawerwidth = 240;
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerTriggerHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();
  const navHandler = (item) => {
    if (mobileOpen) {
      drawerTriggerHandler();
    }
    setActive(item);
    navigate(`${item}`, { replace: true });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <MainAppBarComponent
        matches={matches}
        drawerwidth={drawerwidth}
        drawerTriggerHandler={drawerTriggerHandler}
        navigate={navigate}
      />

      <TemporaryDrawerComponent
        matches={matches}
        drawerwidth={drawerwidth}
        drawerTriggerHandler={drawerTriggerHandler}
        navHandler={navHandler}
        mobileOpen={mobileOpen}
        active={active}
      />

      <PermenantDrawerComponent
        matches={matches}
        drawerwidth={drawerwidth}
        drawerTriggerHandler={drawerTriggerHandler}
        navHandler={navHandler}
        active={active}
      />

      <Toolbar />
      <MainContainer drawerwidth={drawerwidth} matches={matches}>
        <Outlet />
      </MainContainer>

    </Box>
  );
};

export default Main;
