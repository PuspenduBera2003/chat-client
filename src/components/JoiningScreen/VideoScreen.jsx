import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Microphone from './Microphone';
import Camera from './Camera';
import Abort from './Abort';

const VideoScreen = () => {

  const theme = useSelector(state => state.Theme.currentTheme);

  const isSelfMicOn = useSelector(state => state.Mic.selfMic);

  const videoStream = useSelector(state => state.Vid.selfVideoStream);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoStream) {
      videoRef.current.srcObject = videoStream;
      videoRef.current.play();
    }
  })

  return (
    <div className='w-full px-5 py-4 dark:bg-gray-800 relative'>
      <div className='bg-gray-100 dark:bg-gray-900 rounded-xl w-full flex items-center justify-center' style={{height: '95vh'}}>
        {videoStream ?
          (<div className='w-full h-full flex items-center justify-center'>
            <video ref={videoRef} className='h-full p-1 rounded-lg' />
          </div>) :
          (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="gray" className="bi bi-camera-video-off" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518zM1.428 4.18A1 1 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634zM15 11.73l-3.5-1.555v-4.35L15 4.269zm-4.407 3.56-10-14 .814-.58 10 14z" />
            </svg>
          )
        }
        <div className='absolute bg-gray-200 dark:bg-gray-800 p-2 rounded-lg top-8 right-8'>
          {
            isSelfMicOn ?
              <i className="fa-solid fa-microphone" style={{ color: theme === "dark" ? 'white' : 'black', fontSize: '1.2rem' }}></i>
              :
              <i className="fa-solid fa-microphone-slash" style={{ color: theme === "dark" ? 'white' : 'black', fontSize: '1.2rem' }}></i>
          }
        </div>
        <div className='absolute bottom-24 right-10 w-40 sm:w-48 lg:w-52 xl:w-60 h-24 sm:h-28 lg:h-32 xl:h-40 rounded-lg shadow-md bg-black z-10 cursor-pointer'>

        </div>
        <div className='w-full flex items-center justify-center absolute bottom-6 left-0'>
          <div className='flex flex-row flex-wrap bg-gray-200 shadow-sm dark:bg-gray-800 p-2 rounded-lg xl:rounded-xl gap-2 md:gap-3'>
            <Microphone />
            <Camera />
            <Abort />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoScreen
