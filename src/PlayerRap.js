import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

function PlayerRap({name,artist,image}) {
    const [isPlayed, setIsPlayed] = useState(false)
    const [playing, setPlaying] = useState(false)

    function handlePlayClick() {
        setIsPlayed(true)

        setPlaying(true)
    }

    function handlePauseClick() {
        setIsPlayed(false);
        setPlaying(false)
    }
    return (
        <div className='player'>
            <Box component="img" sx={{height:"180px", width:"180px",borderRadius: "15px" }}  alt="Eska RAP 20" src={image}/>
            <br/>
            {isPlayed ?
                <PauseCircleFilledIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={handlePauseClick} />
                :
                <PlayCircleFilledWhiteIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={handlePlayClick} />
            }
            <ReactPlayer
                    playing={playing}
                    url="https://radio.stream.smcdn.pl/icradio-p/6190-1.aac/playlist.m3u8"
                    controls
                    playsinline
                    preload="metadata"
                    style={{ display: "none" }}
                />
            <Typography id="title">{name}</Typography>
            <Typography id="artist">{artist}</Typography>
        </div>

  )
}

export default PlayerRap