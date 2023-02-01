import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Goraca20 from './Goraca20';
import Rap20 from './Rap20';
import Impreska from './Impreska';
import Dom from './Dom';
import axios from 'axios';

function App() {
  const [radio, setRadio] = useState("")
  useEffect(() => {
    getCurrentSong()
    // eslint-disable-next-line 
  }, [radio])

  const [name, setName] = useState("")
  const [artist, setArtist] = useState()
  const [image, setImage] = useState("")
  const [time, setTime] = useState()

  // const [changed, setChanged] = useState(false)

  const defineRadio = (result) => {
    setRadio(result)
    // setChanged(true)
  };

  async function getCurrentSong() {
    clearTimeout(time)
    console.log(radio)
    const response = await axios.get(`https://damien.lensalex.fr:3000/eska?radio=${radio}`)
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
      artists = artists.replace("undefined", "");
      setArtist(artists)
      if (response.data.image !== null) {
        setImage(response.data.image)
      } else {
        switch(radio){
          case "6130":
            setImage("https://cdn.music.smcloud.net/t/cover/5c456bee-6451-4298-bdca-9d7e31f96e91_gf-SH8U-7BAA-AeWq_eska-2xg20_500x500.jpg")
            break;
          case "6030":
            setImage("https://cdn.music.smcloud.net/t/cover/2a264178-a393-4781-ba01-ff7c3894df8a_gf-mBV3-pxB4-b8g5_eska-imprezka_500x500.jpg")
            break;
          case "6190":
            setImage("https://cdn.music.smcloud.net/t/cover/b17cfca3-ce38-466b-bb04-570f6e8f8f0f_gf-WFey-K5xB-QSFE_eska-rap_500x500.jpg")
            break;
          default:
            setImage("https://cdn.music.smcloud.net/t/cover/602854b3-a955-4737-9588-ea963676f73c_ESKA_radio_500x500_500x500.jpg")
        }
      }
      updateMetaData(names, artists, image, thumb)
    } else {
      console.error("Something went wrong");
    }

    var timeId = setTimeout(getCurrentSong, 10 * 1000)
    console.log(timeId)
    setTime(timeId)

  }

  function updateMetaData(nazywa, artyst, image, thumb) {
    navigator.mediaSession.metadata = null
    navigator.mediaSession.metadata = new MediaMetadata({
      title: nazywa,
      artist: artyst,
      album: "Radio Eska",
      artwork: [
        { src: thumb, sizes: '100x100', type: 'image/jpg' },
        { src: image, sizes: '664x664', type: 'image/jpg' },
      ]
    });
  }

  const [link, setLink] = useState("https://radio.stream.smcdn.pl/icradio-p/2380-1.aac/playlist.m3u8");
  const [city, setCity] = useState("Warszawa")
  const handleChange = (event) => {
    setLink(event.target.value);
    setCity(event.target.options[event.target.selectedIndex].text)
    console.log(city)
  };
  return (
    <div className="App">
      <Router>
        <Navbar handleChange={handleChange} link={link} />
        <Routes>
          <Route path='/' exact element={<Dom link={link} city={city} defineRadio={defineRadio} name={name} artist={artist} image={image} />} />
          <Route path='/goraca20' exact element={<Goraca20 city={city} defineRadio={defineRadio} name={name} artist={artist} image={image} />} />
          <Route path='/rap20' exact element={<Rap20 city={city} defineRadio={defineRadio} name={name} artist={artist} image={image} />} />
          <Route path='/eskaImpreska' exact element={<Impreska city={city} defineRadio={defineRadio} name={name} artist={artist} image={image} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
