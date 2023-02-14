import React, { useState } from 'react';
// import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';

function Player({link,name,artist,image}) {
    // const [isPlayed, setIsPlayed] = useState(true)
    // const handlePlayed = () => {
    //     if (isPlayed) {
    //         setIsPlayed(false);
    //     }
    //     if (!isPlayed) {
    //         setIsPlayed(true)
    //     }
    // }
    // const playerRef = React.useRef();

    // function playVideo() {
    //     playerRef.current.play();
    //     handlePlayed()
    // }

    // function pauseVideo() {
    //     playerRef.current.pause();
    //     handlePlayed()
    // }
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
            <Box component="img" sx={{height:"180px", width:"180px",borderRadius: "15px" }}  alt="Eska: Hity na czasy" src={image}/>
            <br/>
            {isPlayed ?
                <PauseCircleFilledIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={handlePauseClick} />
                :
                
                <PlayCircleFilledWhiteIcon sx={{ color: "#eb7d2b", width: '60px', height: '60px' }} onClick={handlePlayClick} />
            }
            <ReactPlayer
                    playing={playing}
                    url={link}
                    controls
                    playsinline
                    preload="metadata"
                    style={{ display: "none" }}
            />
            {/* <ReactHlsPlayer
                src={link}
                playsInline
                preload="metadata"
                autoPlay={false}
                playerRef={playerRef}
                style={{ display: "none" }}
            /> */}
            <Typography id="title">{name}</Typography>
            <Typography id="artist">{artist}</Typography>
        </div>

    );
}

export default Player