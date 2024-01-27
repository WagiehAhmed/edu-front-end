import React from "react";
import { Container } from "../../styles/common";
import Tracks from "../tracks";

const Home = ({ matches }) => {
  return (
    <Container>
      <Tracks matches={matches}/>
    </Container>
  );
};

export default Home;
