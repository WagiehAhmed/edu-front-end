import React from "react";
import {
  TrackCard,
  TrackCardMedia,
  TrackContainer,
  TrackName,
} from "../../styles/tracks";
import { Box } from "@mui/material";
import { CustomLink } from "../../styles/common";
import { useNavigate } from "react-router-dom";


const Track = ({ matches, track }) => {

  const navigate = useNavigate();
  // go to sign up
  const goToTrack = () => {
    navigate(`${track.id}`, { replace: false });
  };

  return (
    <TrackContainer item xs={4} matches={matches}>
      <CustomLink onClick={goToTrack}>
        <TrackCard elevation={5} matches={matches}>
          <TrackCardMedia image={track.image}>
            <Box className="overlay" />
            <TrackName className="track-name">{track.name}</TrackName>
          </TrackCardMedia>
        </TrackCard>
      </CustomLink>
    </TrackContainer>
  );
};

export default Track;
