import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Goraca20 from './Goraca20';
import Rap20 from './Rap20';
import Impreska from './Impreska';
import Dom from './Dom';

function App() {
  const [link, setLink] = React.useState("https://radio.stream.smcdn.pl/icradio-p/2380-1.aac/playlist.m3u8");
  const handleChange = (event) => {
      setLink(event.target.value);
  };
  return (
    <div className="App">
      <Router>
        <Navbar handleChange={handleChange} link={link}/>
        <Routes>
          <Route path='/' exact element={<Dom link={link}/>} />
          <Route path='/goraca20' exact element={<Goraca20 />} />
          <Route path='/rap20' exact element={<Rap20 />} />
          <Route path='/eskaImpreska' exact element={<Impreska />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
