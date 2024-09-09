import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Daylight',
        artist: 'Taylor Swift',
        album: 'Lover',
        artwork: [
          { src: 'https://i.imgur.com/3fVkPTz.jpg', sizes: '300x300', type: 'image/jpeg' },
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current.play();
        setIsPlaying(true);
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current.pause();
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <h1>Background Audio Player</h1>
      <audio
        ref={audioRef}
        src="https://dl.dlmusics.ir/Music/2019/Taylor%20Swift/Lover/18.%20Daylight.mp3"
        preload="auto"
      />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default App;

