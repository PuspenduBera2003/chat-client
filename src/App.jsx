import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import VideoScreen from './components/JoiningScreen/VideoScreen';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('column');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setFlexDirection('row');
      } else {
        setFlexDirection('column');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex call-screen w-full flex-col ${flexDirection === 'row' ? ' sm:flex-row' : ''}`}>
      {
        flexDirection === 'column' ? (
          <>
            <VideoScreen />
            <div className='fixed bottom-0 w-full z-20'>
              <Navbar />
            </div>
          </>
        ) : (
          <>
            <Navbar />
            <VideoScreen />
          </>
        )
      }
    </div>
  );
}

export default App;