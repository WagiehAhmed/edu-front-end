import React from 'react'
import AppDrawer from '../drawer';
import { Box } from '@mui/material';

const Main = ({matches}) => {
  return (
    <Box>
      <AppDrawer matches={matches}/>
   </Box>
  )
}

export default Main;
