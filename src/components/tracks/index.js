import React from "react";
import Track from "./Track";
import { TracksContainer } from "../../styles/tracks";
import {tracks} from "../../data/data";
const Tracks = ({matches}) => {
  return (
    <TracksContainer container columns={{ xs: 4, sm: 8, md: 12}}>
    {
      tracks.map((track)=>(<Track track={track} key={track.name} matches={matches}/>))
    }
    </TracksContainer>
  );
};

export default Tracks;
