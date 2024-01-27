import React from "react";
import Track from "./Track";
import { TracksContainer } from "../../styles/tracks";

const Tracks = ({matches}) => {
  return (
    <TracksContainer container columns={{ xs: 4, sm: 8, md: 12}}>
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
      <Track matches={matches} />
    </TracksContainer>
  );
};

export default Tracks;
