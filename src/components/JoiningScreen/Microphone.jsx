import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toggleSelfMic from '../../redux/Microphone/Actions/ActionTypes/UpdateSelfMic';

const Microphone = () => {

    const dispatch = useDispatch();
    const [isMicOn, setIsMicOn] = useState(false);
    const [mediaStream, setMediaStream] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const toggleMicState = () => {
        if (!isMicOn) {
            startRecording();
            dispatch(toggleSelfMic(true));
        } else {
            stopRecording();
            dispatch(toggleSelfMic(false));
        }
        setIsMicOn(prevState => !prevState);
    }

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioCtx.createMediaStreamSource(stream);
                const analyserNode = audioCtx.createAnalyser();
                source.connect(analyserNode);
                setMediaStream(stream);
                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = handleDataAvailable;
                recorder.start();
                setMediaRecorder(recorder);
            })
            .catch(error => console.error('Error accessing microphone:', error));
    }

    const handleDataAvailable = (event) => {
        if (event.data.size > 0) {
        }
    }

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            mediaRecorder.onstop = () => {

            }
        }
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            setMediaStream(null);
        }
    }

    return (
        <button onClick={toggleMicState} className='p-2 border rounded-full shadow-sm bg-gray-300 dark:bg-gray-600'>
            {
                isMicOn
                    ?
                    <i className="fa-solid fa-microphone" style={{ color: 'green', fontSize: '1.2rem' }}></i>
                    :
                    <i className="fa-solid fa-microphone-slash" style={{ color: 'red', fontSize: '1.2rem' }}></i>
            }
        </button>
    )
}

export default Microphone;