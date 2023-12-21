import React from 'react';

function LoginItem ({userName, pfpUrl, enabled, dest}){

    const handleClick = () => {
        window.open(dest, '_self');
    }

    return( enabled ? (
            <button 
                className='cursor-pointer transition duration-300 hover:scale-125 group'
                onClick={handleClick}
            >
                <img
                    src={pfpUrl} 
                    alt='profile picture'
                    className='rounded-full w-36 h-36 object-cover'
                />
                <h3 className='text-lg md:text-xl mt-2 font-body text-center group-hover:underline underline-offset-1 decoration-2'>.{userName}</h3>
            </button> 
        ) : (
            <div className='cursor-not-allowed transition duration-300 hover:scale-125 group'>
                <img 
                    src='/assets/images/noUserPfp.jpg' 
                    alt='profile picture'
                    className='rounded-full w-36 h-36 object-cover grayscale opacity-25'
                />
                <h3 className='text-lg md:text-xl mt-2 font-body text-center opacity-25 transition duration-300 group-hover:hidden'>.{userName}</h3>
                <h3 className='text-lg md:text-xl mt-2 font-body text-center opacity-25 transition duration-300 hidden group-hover:block group-hover:underline underline-offset-1 decoration-2'>.unavailable</h3>
            </div> 
        )
    )
}

export default LoginItem