import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Daylight / Bad Blood',
        artist: 'Taylor Swift',
        album: 'Lover / 1989',
        artwork: [
          { src: 'https://i.imgur.com/3fVkPTz.jpg', sizes: '300x300', type: 'image/jpeg' },
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        if (isAudioPlaying) {
          audioRef.current.play();
        } else if (isVideoPlaying) {
          videoRef.current.play();
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        if (isAudioPlaying) {
          audioRef.current.pause();
        } else if (isVideoPlaying) {
          videoRef.current.pause();
        }
      });
    }
  }, [isAudioPlaying, isVideoPlaying]);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const toggleVideo = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      }
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="App">
      <h1>Background Media Player</h1>
      <audio
        ref={audioRef}
        src="https://dl.dlmusics.ir/Music/2019/Taylor%20Swift/Lover/18.%20Daylight.mp3"
        preload="auto"
      />
      <button onClick={toggleAudio}>
        {isAudioPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>
      
      <video
        ref={videoRef}
        src="https://dl.datmusic.ir/1401/09/Music%20Video/American/Taylor%20Swift/%5BDatMusic.IR%5D%20Taylor%20Swift%20-%20Bad%20Blood.mp4"
        preload="auto"
        style={{ width: '100%', maxWidth: '500px', display: 'block', marginTop: '20px' }}
      />
      <button onClick={toggleVideo}>
        {isVideoPlaying ? 'Pause Video' : 'Play Video'}
      </button>
    </div>
  );
}

export default App;

