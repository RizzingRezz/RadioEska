import React from 'react'
import Player from './Player'

function Dom({link}) {
    document.title = "Radio Eska";
  return (
    <Player link={link} />
  )
}

export default Dom