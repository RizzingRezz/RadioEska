import { FormControl, Grid, NativeSelect } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Navbar({ handleChange, link }) {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <Grid sx={{ px: "10%" }} container spacing={2}>
                <Grid item xs={5}>
                    <Link to='/'>
                        <img height="60px" width="180px" alt="Eska Logo" src="/images/eska.svg" />
                    </Link>
                    <FormControl sx={{ ml: 4, mt: 2, minWidth: 120 }}>
                        <NativeSelect sx={{ color: "#202f7b" }} defaultValue={link} onChange={handleChange} >
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2380-1.aac/playlist.m3u8">Warszwa</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2100-1.aac/playlist.m3u8">Łódź</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2180-1.aac/playlist.m3u8">Wrocław</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2260-1.aac/playlist.m3u8">Szczecin</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2140-1.aac/playlist.m3u8">Poznań</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2070-1.aac/playlist.m3u8">Kraków</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2220-1.aac/playlist.m3u8">Katowice</option>
                            <option value="https://radio.stream.smcdn.pl/icradio-p/2020-1.aac/playlist.m3u8">Białystock</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >
                    <button className='nav-links' onClick={() => { navigate("/goraca20") }}>GORĄCA 20</button>
                    <button className='nav-links' onClick={() => { navigate("/rap20") }}>RAP 20</button>
                    <button className='nav-links' onClick={() => { navigate("/eskaImpreska") }}>ESKA IMPRESKA</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar