import React, { useEffect, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import MainAppBarComponent from "../mainAppBar";
import TemporaryDrawerComponent from "../drawers/TemporaryDrawerComponent";
import { Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { MainContainer } from "../../styles/drawers";
import {HeaderContainer, MainHeader } from "../../styles/common";

const Main = ({ matches , mainTitle, setMainTitle}) => {
  const drawerwidth = 240;
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const  {pathname} = useLocation();

  useEffect(() => {
    if(pathname == "/home"){
      setMainTitle("technological tracks");
    }
  });

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
    <Box>
      <MainAppBarComponent
        matches={matches}
        drawerwidth={drawerwidth}
        drawerTriggerHandler={drawerTriggerHandler}
        navigate={navigate}
        navHandler={navHandler}
        active={active}
      />

      <TemporaryDrawerComponent
        matches={matches}
        drawerwidth={drawerwidth}
        drawerTriggerHandler={drawerTriggerHandler}
        navHandler={navHandler}
        mobileOpen={mobileOpen}
        active={active}
      />

      <Toolbar />
      <HeaderContainer matches={matches}>
        <MainHeader matches={matches}>{mainTitle}</MainHeader>
      </HeaderContainer>
      <MainContainer matches={matches} drawerwidth={drawerwidth}>
        <Outlet />
      </MainContainer>
    </Box>
  );
};

export default Main;
