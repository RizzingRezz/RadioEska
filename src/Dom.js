import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Player from './Player'

function Dom({ link, city,defineRadio,name,artist,image}) {
  useEffect(() => {
    radio()
  }, )
  const radio = async() => {
    var linkApi = link.slice(40,44)
    defineRadio(linkApi)
  }
  document.title = "Radio Eska";
  return (
    <>
      <Typography sx={{color: "#eb7d2b", py:2}}>Słuchaj Radio Eska {city}</Typography>
      <Player link={link} name={name} artist={artist} image={image} />
    </>
  )
}

export default Dom