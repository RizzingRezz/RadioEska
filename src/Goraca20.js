import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PlayerGoraca from './PlayerGoraca'

function Goraca20({defineRadio,name,artist,image}) {
  useEffect(() => {
    radio()
  }, )
  const radio = async() => {
    defineRadio("6130")
  }

  document.title = "Gorąca 20 - ESKA";
  return (
    <>
    <Typography sx={{color: "#eb7d2b", py:2}}>Słuchaj Gorąca 20</Typography>
    <PlayerGoraca name={name} artist={artist} image={image} />
    </>
    
  )
}

export default Goraca20