import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import updateSelfVideoStream from '../../redux/Video/Actions/ActionTypes/UpdateSelfVideoStream';

const Camera = () => {

    const [isCamOn, setIsCamOn] = useState(false);
    const videoRef = useRef(null);
    const dispatch = useDispatch();

    const toggleCamState = () => {
        if (!isCamOn) {
            startVideo();
        } else {
            stopVideo();
        }
        setIsCamOn(prevState => !prevState);
    }

    const startVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            dispatch(updateSelfVideoStream(stream)); // Dispatch action to update video stream in Redux store
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    const stopVideo = () => {
        const stream = videoRef.current.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            dispatch(updateSelfVideoStream(null)); // Dispatch action to clear video stream in Redux store
            videoRef.current.srcObject = null;
        }
    }

    return (
        <button onClick={toggleCamState} className='p-2 border rounded-full shadow-sm bg-gray-300 dark:bg-gray-600'>
            {
                isCamOn ?
                    (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                    </svg>) :
                    (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-camera-video-off-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272zm-10.114-9A2 2 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728zm9.746 11.925-10-14 .814-.58 10 14z" />
                    </svg>)
            }
            <div className='hidden'>
                {isCamOn && <video ref={videoRef}></video>}
            </div>
        </button>
    )
}

export default Camera
