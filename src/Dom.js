import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Player from './Player'

function Dom({ link, city }) {
  useEffect(() => {
    getCurrentSong()
  }, )

  const [name, setName] = useState("")
  const [artist, setArtist] = useState()
  const [image, setImage] = useState("https://cdn.music.smcloud.net/t/cover/602854b3-a955-4737-9588-ea963676f73c_ESKA_radio_500x500_500x500.jpg")

  async function getCurrentSong(){
    var linkApi = link.slice(40,44)
    const response = await axios.get(`https://damien.lensalex.fr:3000/eska?radio=${linkApi}`)
    if (response.status === 200) {
      console.log(response)
      var thumb = response.data.thumb
      var names = response.data.name
        setName(response.data.name)
        var artists
        response.data.artists.map((item, index) => {
          artists += item.name + ", "
          return artists
        })
        artists = artists.slice(0, -2);
        artists = artists.replace("undefined","");
        setArtist(artists)
        if(response.data.image !== null){
          setImage(response.data.image)
        }else{
          setImage("https://cdn.music.smcloud.net/t/cover/602854b3-a955-4737-9588-ea963676f73c_ESKA_radio_500x500_500x500.jpg")
        }
        updateMetaData(names,artists, image,thumb)
      } else {
        console.error("Something went wrong");
      }
      setTimeout(getCurrentSong, 10 * 1000)
  }

  function updateMetaData(nazywa,artyst,image,thumb) {
    navigator.mediaSession.metadata= null
    navigator.mediaSession.metadata = new MediaMetadata({
      title:  nazywa ,
      artist:  artyst ,
      album:"Eska : Hity na czasie",
      artwork: [
        { src: thumb, sizes: '100x100', type: 'image/jpg' },
        { src: image, sizes: '664x664', type: 'image/jpg' },
      ]
    });
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