import React, { useRef } from 'react'
import './VideoPlayer.css'
import videoSource from '../../assets/video.mp4' // Replace with your video file path
const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const closeplayer=(e)=> {
        if (e.target ===player.current)
            setPlayState(false);
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`}ref={player} onClick={closeplayer}>
      <video src={videoSource} autoPlay muted controls className='video'>
      </video>
    </div>
  )
}

export default VideoPlayer