import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlayerGoraca from './PlayerGoraca'

function Goraca20() {
  useEffect(() => {
    getCurrentSong()
  }, )

  const [name, setName] = useState("")
  const [artist, setArtist] = useState()
  const [image, setImage] = useState("https://cdn.music.smcloud.net/t/cover/5c456bee-6451-4298-bdca-9d7e31f96e91_gf-SH8U-7BAA-AeWq_eska-2xg20_500x500.jpg")

  async function getCurrentSong(){
    const response = await axios.get("https://damien.lensalex.fr:3000/eska?radio=6130")
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
          setImage("https://cdn.music.smcloud.net/t/cover/5c456bee-6451-4298-bdca-9d7e31f96e91_gf-SH8U-7BAA-AeWq_eska-2xg20_500x500.jpg")
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
      album:"GORĄCA 20",
      artwork: [
        { src: thumb, sizes: '100x100', type: 'image/jpg' },
        { src: image, sizes: '664x664', type: 'image/jpg' },
      ]
    });
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