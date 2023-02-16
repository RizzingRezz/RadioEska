import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Player from './Player';
import axios from 'axios';

function Rap20({ defineRadio, name, artist, image }) {
  useEffect(() => {
    radio()
  },)
  const [lyrics, setLyrics] = useState("")
  const [isShowed, setIsShowed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [oldName, setOldName] = useState("")

  const radio = async () => {
    defineRadio("6190")
  }

  async function getLyrics() {
    setIsLoading(true)
    console.log("old: ", oldName)
    console.log("cuurent: ", name[1])
    if (oldName === name[1]) {
      console.log("ne pas refaire")
      setIsShowed(true)
      setIsLoading(false)
    } else {
      console.log("refaire")
      const response = await axios.get("http://localhost:8082/genius?search=" + name[1] + artist[1])
      if (response.status === 200) {
        setIsLoading(false)
        setLyrics(response.data.result)
        setIsShowed(true)
        setOldName(name[1])
      } else {
        console.log("Something went wrong")
      }
    }

  }

  function handleHide() {
    setIsShowed(false)
  }

  document.title = "Rap 20 - ESKA";
  return (
    <>
      <Typography sx={{ color: "#eb7d2b", py: 2 }}>Słuchaj Rap 20</Typography>
      <Player link="https://radio.stream.smcdn.pl/icradio-p/6190-1.aac/playlist.m3u8" name={name[1]} artist={artist[1]} image={image[1]} />
      <div >
        <Grid sx={{ minWidth: "200px", margin: '0 auto', width: '200px' }} item xs={6} md={6}>
          <Typography sx={{ fontSize: '18px', padding: 2 }}>Następna</Typography>
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
      <br /><br />
      {isShowed ?
        <>
          <button onClick={handleHide} >Ukryj</button>
          <div id='lyrics' dangerouslySetInnerHTML={{ __html: lyrics }} />
        </>
        :
        <>
          <button onClick={getLyrics} disabled={isLoading}>Zobac tekst</button>
        </>
      }

      <br /><br /><br />
    </>
  )
}

export default Rap20