import React from 'react'
import Switcher from '../theme/Switcher'
import ChatButton from './ChatButton'
import CallButton from './CallButton'

const Navbar = () => {
    return (
        <div className='text-black dark:text-white bg-gray-100 dark:bg-gray-900 p-4 sm:p-2 flex flex-row sm:flex-col items-center justify-between border-t sm:border-r sm:border-t-0 dark:border-gray-600'>
            <div className='flex flex-row sm:flex-col gap-4 items-center justify-between w-full sm:w-auto'>
                <ChatButton />
                <CallButton />
            </div>
            <div className='hidden sm:block'>
                <Switcher />
            </div>
        </div>
    )
}

export default Navbar
