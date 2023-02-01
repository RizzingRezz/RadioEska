import React, { useEffect, useState } from 'react'
import PlayerRap from './PlayerRap'
import axios from 'axios';
import { Typography } from '@mui/material';

function Rap20() {
  useEffect(() => {
    getCurrentSong()
  }, )

  const [name, setName] = useState("")
  const [artist, setArtist] = useState()
  const [image, setImage] = useState("https://cdn.music.smcloud.net/t/cover/b17cfca3-ce38-466b-bb04-570f6e8f8f0f_gf-WFey-K5xB-QSFE_eska-rap_500x500.jpg")

  async function getCurrentSong(){
    const response = await axios.get("https://damien.lensalex.fr:3000/eska?radio=6190")
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
          setImage("https://cdn.music.smcloud.net/t/cover/b17cfca3-ce38-466b-bb04-570f6e8f8f0f_gf-WFey-K5xB-QSFE_eska-rap_500x500.jpg")
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
      album:"Radio Eska",
      artwork: [
        { src: thumb, sizes: '100x100', type: 'image/jpg' },
        { src: image, sizes: '664x664', type: 'image/jpg' },
      ]
    });
  }
  document.title = "Rap 20 - ESKA";
  return (
    <>
      <Typography sx={{color: "#eb7d2b", py:2}}>Słuchaj Rap 20</Typography>
      <PlayerRap name={name} artist={artist} image={image} />
    </>
  )
}

export default Rap20