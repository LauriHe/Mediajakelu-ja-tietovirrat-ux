import { useEffect, useState } from 'react';
import thumbnail from '../assets/images/thumbnail.jpeg';
import { socket } from '../utils/socket';
import ChatMessage from '../components/ChatMessage';

function Stream() {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('Syötä nimimerkki');
  const [inputError, setInputError] = useState(false);
  const [desktopChat, setDesktopChat] = useState(false);
  const desktopSize = 1100;
  const [videoHeight, setVideoHeight] = useState(0);
  socket;

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    socket.emit('chat messages', input);
    setInput('');
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    const username = input;
    socket.auth = { username };
    socket.connect();
    setSocketConnected(true);
    setInputError(false);
    setInputPlaceholder('Syötä viesti');
    setInput('');
  };

  const joinRoom = (room) => {
    setChatMessages([]);
    socket.emit('join', room);
  };

  useEffect(() => {
    if (socketConnected) {
      socket.emit('chat messages', '');
      socket.emit('join', 'room1');
      socket.on('chat messages', (messages) => {
        setChatMessages(messages);
      });
    }
  }, [socketConnected]);

  useEffect(() => {
    const video = document.querySelector('img');
    video.onload = () => {
      setVideoHeight(video.offsetHeight);
      if (window.innerWidth > desktopSize) {
        setDesktopChat(true);
      }
      onresize = () => {
        setVideoHeight(video.offsetHeight);
        if (window.innerWidth > desktopSize) {
          setDesktopChat(true);
        } else {
          setDesktopChat(false);
        }
      };
    };

    socket.on('connect_error', (err) => {
      if (err.message === 'invalid username') {
        setSocketConnected(false);
        setInputError(true);
        setInputPlaceholder('Nimimerkki ei kelpaa');
        socket.disconnect();
      } else if (err.message === 'username taken') {
        setSocketConnected(false);
        setInputError(true);
        setInputPlaceholder('Nimimerkki on jo käytössä');
        socket.disconnect();
      }
    });

    return () => {
      socket.disconnect();
      socket.off('chat messages');
    };
  }, []);

  return (
    <div className="bg-raisin-black-2 flex w-full h-full absolute top-0">
      <div className="w-full h-full flex items-center flex-col gap-2 pt-36 pb-8 overflow-hidden relative">
        <div className="max-w-[90%] max-h-full z-10 relative">
          <img className="w-full max-h-full rounded-md mb-32" src={thumbnail}></img>
          {!desktopSize && <div className="w-full h-32 absolute bottom-0 inverted-filter"></div>}
        </div>
        <div
          className={desktopChat ? 'absolute flex gap-2 pr-2 pt-[10rem] z-30 right-[5%]' : 'absolute flex gap-4 pt-[10rem] z-10'}
          style={desktopChat ? { top: 0 } : { top: `${videoHeight}px` }}
        >
          <button
            className={
              desktopChat ? 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white text-sm' : 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white'
            }
            onClick={() => {
              joinRoom('room1');
            }}
          >
            Huone 1
          </button>
          <button
            className={
              desktopChat ? 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white text-sm' : 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white'
            }
            onClick={() => {
              joinRoom('room2');
            }}
          >
            Huone 2
          </button>
          <button
            className={
              desktopChat ? 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white text-sm' : 'h-fit w-fit p-1 rounded-md bg-raisin-black text-white'
            }
            onClick={() => {
              joinRoom('room3');
            }}
          >
            Huone 3
          </button>
        </div>
        <div
          className={
            desktopChat
              ? 'w-[20%] absolute right-[5%] flex flex-col-reverse gap-3 overflow-hidden z-20 bg-black bg-opacity-80 rounded-md pl-4 pb-14'
              : 'w-[90%] absolute flex flex-col-reverse gap-3 pb-[14.52rem] overflow-hidden rounded-md'
          }
          style={desktopChat ? { height: videoHeight } : { height: '100%' }}
          id="chat"
        >
          {chatMessages.map((message, index) => {
            return <ChatMessage message={message} key={index}></ChatMessage>;
          })}
        </div>
        <form
          onSubmit={socketConnected ? handleMessageSubmit : handleUsernameSubmit}
          className={desktopChat ? 'w-[20%] right-[5%] absolute flex items-center z-30 mt-[6rem]' : 'w-full absolute flex items-center'}
          style={desktopChat ? { top: `${videoHeight}px` } : { bottom: '1.5rem' }}
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className={
              inputError
                ? 'bg-raisin-black w-full h-10 rounded-md mx-[5%] pl-2 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500'
                : 'bg-raisin-black w-full h-10 rounded-md mx-[5%] pl-2 pr-10 text-white'
            }
            placeholder={inputPlaceholder}
          ></input>
          <button type="submit" className="w-9 h-9 bg-[url(../sendIcon.svg)] bg-cover absolute right-[5%]"></button>
        </form>
      </div>
    </div>
  );
}

export default Stream;
