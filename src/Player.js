import React, { useEffect, useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { Box } from '@mui/system';
import { Typography, Slider } from '@mui/material';
import ReactPlayer from 'react-player';

function Player({ link, name, artist, image }) {
    const [isPlayed, setIsPlayed] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [volume, setVolume] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handlePlayClick() {
        setIsPlayed(true)

        setPlaying(true)
    }

    function handleVolumeChange(event, newValue) {
        setVolume(newValue);
    }

    function handlePauseClick() {
        setIsPlayed(false);
        setPlaying(false)
    }
    return (
        <div className='player'>
            <Box component="img" sx={{ height: "180px", width: "180px", borderRadius: "15px" }} alt="Eska: Hity na czasy" src={image} />
            <br />
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
                volume={volume}
                style={{ display: "none" }}
            />
            <br />
            {windowWidth >= 960 && (
                <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={1}
                    step={0.01}
                    aria-labelledby="continuous-slider"
                    sx={{ width: 100, color: "#eb7d2b" }}
                />
            )}
            <Typography id="title">{name}</Typography>
            <Typography id="artist">{artist}</Typography>
        </div>

    );
}

export default Player