import React, { useEffect } from 'react'
import PlayerRap from './PlayerRap'

import { Typography } from '@mui/material';

function Rap20({defineRadio,name,artist,image}) {
  useEffect(() => {
    radio()
  }, )
  const radio = async() => {
    defineRadio("6190")
  }
  document.title = "Rap 20 - ESKA";
  return (
    <>
      <Typography sx={{color: "#eb7d2b", py:2}}>Słuchaj Rap 20</Typography>
      <PlayerRap name={name} artist={artist} image={image} />
    </>
  )
}

export default Rap20