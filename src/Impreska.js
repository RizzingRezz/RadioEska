import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlayerImpreska from './PlayerImpreska'

function Impreska() {
  useEffect(() => {
    getCurrentSong()
  }, )

  const [name, setName] = useState("")
  const [artist, setArtist] = useState()
  const [image, setImage] = useState("https://cdn.music.smcloud.net/t/cover/2a264178-a393-4781-ba01-ff7c3894df8a_gf-mBV3-pxB4-b8g5_eska-imprezka_500x500.jpg")

  async function getCurrentSong() {
    const response = await axios.get("/api/mobile/station/6030/now_playing", { headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS' } })
    if (response.status === 200) {
      var endTime = new Date(response.data[3].end_time)
      var now = new Date(Date.now())
      var artists = ""
      if (endTime <= now) {
        var thumb = response.data[2].thumb
        var names = response.data[2].name
        setName(response.data[2].name)
        response.data[2].artists.map((item, index) => {
          artists += item.name + ", "
          return artists
        })
        artists = artists.slice(0, -2);
        setArtist(artists)
        if(response.data[3].image !== null){
          setImage(response.data[2].image)
        }else{
          setImage("https://cdn.music.smcloud.net/t/cover/2a264178-a393-4781-ba01-ff7c3894df8a_gf-mBV3-pxB4-b8g5_eska-imprezka_500x500.jpg")
        }
        updateMetaData(names,artists, image,thumb)
      } else {
        thumb = response.data[3].thumb
        names = response.data[3].name
        setName(response.data[3].name)
        response.data[3].artists.map((item, index) => {
          artists += item.name + ", "
          return artists
        })
        artists = artists.slice(0, -2);
        setArtist(artists)
        if(response.data[3].image !== null){
          setImage(response.data[3].image)
        }else{
          setImage("https://cdn.music.smcloud.net/t/cover/2a264178-a393-4781-ba01-ff7c3894df8a_gf-mBV3-pxB4-b8g5_eska-imprezka_500x500.jpg")
        }
        
        updateMetaData(names,artists, image,thumb)
      }
      
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
      album:"ESKA IMPRESKA",
      artwork: [
        { src: thumb, sizes: '100x100', type: 'image/jpg' },
        { src: image, sizes: '664x664', type: 'image/jpg' },
      ]
    });
  }
    document.title = "Impreska - ESKA";
  return (
    <PlayerImpreska name={name} artist={artist} image={image} />
  )
}

export default Impreska