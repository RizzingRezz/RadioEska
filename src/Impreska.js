import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Player from './Player'

function Impreska({ defineRadio, name, artist, image }) {
  useEffect(() => {
    radio()
  },)
  const radio = async () => {
    defineRadio("6030")
  }

  document.title = "Impreska - ESKA";
  return (
    <>
      <Typography sx={{ color: "#eb7d2b", py: 2 }}>Słuchaj Impreska</Typography>
      <Player link="https://radio.stream.smcdn.pl/icradio-p/6030-1.aac/playlist.m3u8" name={name[1]} artist={artist[1]} image={image[1]} />
      <div >
        <Grid sx={{ minWidth: "200px", margin: '0 auto', width: '200px' }} item xs={6} md={6}>
          <Typography sx={{ fontSize: '18px', padding: 2 }}>Następna</Typography>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska Impreska"
                src={image[0]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[0]}</Typography>
              <Typography id="artist_bis">{artist[0]}</Typography>
            </div>
          </Stack>
        </Grid>
        <Grid sx={{ minWidth: "200px", margin: '0 auto', width: '200px' }} item xs={6} md={6}>
          <Typography sx={{ fontSize: '18px', padding: 2 }}>Poprzednia</Typography>
          {[2, 3, 4, 5, 6].map(index => (
            <Stack key={index} direction="row" spacing={2}>
              <div>
                <Box
                  component="img"
                  sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                  alt="Eska Impreska"
                  src={image[index]}
                />
              </div>
              <div>
                <Typography id="title_bis">{name[index]}</Typography>
                <Typography id="artist_bis">{artist[index]}</Typography>
              </div>
            </Stack>
          ))}
      </Grid>
      </div>
      <br /><br />
    </>

  )
}

export default Impreska