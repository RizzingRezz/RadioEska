import React, { useState } from 'react';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box } from '@mui/material';

function PlayerRap() {
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
        console.log(isPlayed)
    }

    function pauseVideo() {
        playerRef.current.pause();
        handlePlayed()
        console.log(isPlayed)
    }
    return (
        <div className='content'>
            {isPlayed ?
                <PlayCircleFilledWhiteIcon sx={{ color: "#eb7d2b", width: '75px', height: '75px' }} onClick={playVideo} />
                :
                <PauseCircleFilledIcon sx={{ color: "#eb7d2b", width: '75px', height: '75px' }} onClick={pauseVideo} />
            }
            <ReactHlsPlayer
                src="https://radio.stream.smcdn.pl/icradio-p/6190-1.aac/playlist.m3u8"
                playsInline
                author="Test"
                autoPlay={false}
                playerRef={playerRef}
                style={{ display: "none" }}
            />
            <Box component="img" sx={{marginLeft:{md:'200px', sm:'100px', xs:'75px'}, height:"180px", width:"180px" }}  alt="Eska: Hity na czasy" src="https://cdn.music.smcloud.net/t/cover/b17cfca3-ce38-466b-bb04-570f6e8f8f0f_gf-WFey-K5xB-QSFE_eska-rap_500x500.jpg"/>
        </div>

  )
}

export default PlayerRap