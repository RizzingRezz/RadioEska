import { Box, Grid, Stack, Typography } from '@mui/material';
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
      <Player link={link} name={name[1]} artist={artist[1]} image={image[1]} />
      <div >
        <Grid sx={{ minWidth: "200px", margin: '0 auto', width: '200px' }} item xs={6} md={6}>
          <Typography sx={{ fontSize: '18px', padding: 2 }}>Następny</Typography>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
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
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
                src={image[2]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[2]}</Typography>
              <Typography id="artist_bis">{artist[2]}</Typography>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
                src={image[3]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[3]}</Typography>
              <Typography id="artist_bis">{artist[3]}</Typography>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
                src={image[4]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[4]}</Typography>
              <Typography id="artist_bis">{artist[4]}</Typography>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
                src={image[5]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[5]}</Typography>
              <Typography id="artist_bis">{artist[5]}</Typography>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <Box
                component="img"
                sx={{ height: "75px", width: "75px", borderRadius: "5px" }}
                alt="Eska RAP 20"
                src={image[6]}
              />
            </div>
            <div>
              <Typography id="title_bis">{name[6]}</Typography>
              <Typography id="artist_bis">{artist[6]}</Typography>
            </div>
          </Stack>
        </Grid>
      </div>
    </>
  )
}

export default Dom