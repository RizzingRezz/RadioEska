import React, { useState } from 'react';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box } from '@mui/material';

function PlayerImpreska() {
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
                src="https://radio.stream.smcdn.pl/icradio-p/6030-1.aac/playlist.m3u8"
                playsInline
                author="Test"
                autoPlay={false}
                playerRef={playerRef}
                style={{ display: "none" }}
            />
            <Box component="img" sx={{marginLeft:{md:'200px', sm:'100px', xs:'75px'}, height:"180px", width:"180px" }}  alt="Eska: Hity na czasy" src="https://cdn.music.smcloud.net/t/cover/2a264178-a393-4781-ba01-ff7c3894df8a_gf-mBV3-pxB4-b8g5_eska-imprezka_500x500.jpg"/>
        </div>
  )
}

export default PlayerImpreska