import React from 'react'
import { TrackCard, TrackCardMedia, TrackContainer } from '../../styles/tracks'

const Track = ({matches}) => {
  return (
    <TrackContainer item xs={4} matches={matches}>
      <TrackCard elevation={5} matches={matches}>
        <TrackCardMedia image="./images/image1.png" title="course media" />
      </TrackCard>
    </TrackContainer>
  )
}

export default Track
