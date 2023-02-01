import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PlayerImpreska from './PlayerImpreska'

function Impreska({defineRadio,name,artist,image}) {
  useEffect(() => {
    radio()
  }, )
  const radio = async() => {
    defineRadio("6030")
  }

  document.title = "Impreska - ESKA";
  return (
    <>
    <Typography sx={{color: "#eb7d2b", py:2}}>Słuchaj Impreska</Typography>
    <PlayerImpreska name={name} artist={artist} image={image} />
    </>
    
  )
}

export default Impreska