import React, { useState } from 'react';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box, Typography } from '@mui/material';

function PlayerImpreska({name,artist,image}) {
    const [isPlayed, setIsPlayed] = useState(true)
    const handlePlayed = () => {
        if (isPlayed) {
            setIsPlayed(false);
        }
        if (!isPlayed) {
            setIsPlayed(true)
        }
    }
    const playerRef = React.useRef();

    function playVideo() {
        playerRef.current.play();
        handlePlayed()
    }

    function pauseVideo() {
        playerRef.current.pause();
        handlePlayed()
    }
    return (
        <div className='player'>
            <Box component="img" sx={{height:"180px", width:"180px",borderRadius: "15px" }}  alt="Eska IMPRESKA" src={image}/>
            <br />
            {isPlayed ?
                <PlayCircleFilledWhiteIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={playVideo} />
                :
                <PauseCircleFilledIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={pauseVideo} />
            }
            <ReactHlsPlayer
                src="https://radio.stream.smcdn.pl/icradio-p/6030-1.aac/playlist.m3u8"
                playsInline
                preload="metadata"
                autoPlay={false}
                playerRef={playerRef}
                style={{ display: "none" }}
            />
            <Typography id="title">{name}</Typography>
            <Typography id="artist">{artist}</Typography>
        </div>
  )
}

export default PlayerImpreska