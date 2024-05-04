import React from 'react'

const ChatButton = () => {
    return (
        <button className='border dark:border-gray-600 py-1 px-2 rounded-md bg-gray-200 dark:bg-gray-700'>
            <i className="fa-solid fa-message" style={{ fontSize: '1.2rem' }}></i>
        </button>
    )
}

export default ChatButton
