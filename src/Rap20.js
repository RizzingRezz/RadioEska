import React, { useEffect } from 'react'
import PlayerRap from './PlayerRap'

import { Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

function Rap20({ defineRadio, name, artist, image, previousName, previousArtist, previousImage, nextArtist, nextImage, nextName }) {
  useEffect(() => {
    radio()
  },)
  const radio = async () => {
    defineRadio("6190")
  }
  document.title = "Rap 20 - ESKA";
  return (
    <>
      <Typography sx={{ color: "#eb7d2b", py: 2 }}>Słuchaj Rap 20</Typography>
      <PlayerRap name={name} artist={artist} image={image} />
        <div >
          <Grid container spacing={2}>
            <Grid sx={{minWidth:"200px"}} item xs={6} md={6}>
              <Typography>Poprzednia</Typography>
              <Stack direction="row" spacing={2}>
                <div>
                  <Box component="img" sx={{ height: "75px", width: "75px", borderRadius: "5px" }} alt="Eska RAP 20" src={previousImage} />
                </div>
                <div>
                  <Typography id="title_bis">{previousName}</Typography>
                  <Typography id="artist_bis">{previousArtist}</Typography>
                </div>
              </Stack>
            </Grid>
            <Grid sx={{minWidth:"200px"}} item xs={6} md={6}>
              <Typography>Następny</Typography>
              <Stack direction="row" spacing={2}>
                <div>
                  <Box component="img" sx={{ height: "75px", width: "75px", borderRadius: "5px" }} alt="Eska RAP 20" src={nextImage} />
                </div>
                <div>
                  <Typography id="title_bis">{nextName}</Typography>
                  <Typography id="artist_bis">{nextArtist}</Typography>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default Rap20