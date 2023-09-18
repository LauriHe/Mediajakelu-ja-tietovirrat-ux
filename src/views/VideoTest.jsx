import { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

function VideoTest() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    muted: true,
    controls: true,
    responsive: true,
    fluid: true,
    loop: true,
    liveui: true,
    sources: [
      {
        src: './fuji.mp4',
        type: 'video/mp4',
        //src: 'http://195.148.104.124:1935/jakelu/ulla/playlist.m3u8',
        //type: 'application/x-mpegURL',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default VideoTest;
