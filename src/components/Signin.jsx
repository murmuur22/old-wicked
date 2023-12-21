import React, { useState } from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';
import Profiles from './Profiles';
import Navbar from './Navbar';


function Signin(){
    const [ view, setView ] = useState('welcome')

    const renderView = () => {
        switch(view){
            case "welcome":
                return(
                    <>
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-center py-20">
                            <img 
                                src={logoRef}
                                alt='wicked logo'
                                className='w-48'
                            />
                            <h1 className="text-7xl pb-0 mb-0 font-bold">wicked</h1>
                            <h1 className="text-7xl pt-0 mb-3 font-light">.earth</h1>
                            <p className="text-sm mb-3 font-terminal">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                            <p className='text-2xl font-display'>
                            <span className='animate-blink pr-4'>&gt;</span>
                                <button 
                                    onClick={() => setView("select")}
                                    className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                                >
                                    SIGN IN
                                </button>
                            <span className='animate-blink pl-4'>&lt;</span>
                            
                            </p>
                        </div>
                    </>
                );
            case "select":
                return(
                    <>
                        <div>
                            <div className='inset-0 flex flex-col items-center justify-center relative md:absolute gap-12 md:gap-20 lg:gap-24 mt-20 mb-40 md:mt-0 md:mb-0'>
                                <Profiles />
                                <div className='flex flex-col gap-2'>
                                    <button
                                        onClick={() => setView("admin")}
                                        className='cursor-pointer transition duration-300 hover:scale-125 group border-black border-2 rounded-full'
                                    >
                                    <p className='px-4 py-1 font-body text-sm'>administrator</p>
                                    </button>
                                    <button
                                        onClick={() => setView("other")}
                                        className='cursor-pointer transition duration-300 hover:scale-125 group border-black border-2 rounded-full'
                                    >
                                    <p className='px-3 py-1 font-body text-sm'>other...</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Navbar 
                                right={[
                                    { name: 'RESUME', event:'resume' },
                                    { name: 'CONTACT', event:'contact' },
                                    { name: 'BACK', event:(() => setView("welcome")) },
                                ]}
                            />
                    </>
                );
            case "admin":
                return (
                    <>
                        <div>
                        <form className='
                            inset-0 flex flex-col items-center justify-center absolute gap-6
                            font-body text-xl
                            '
                        >
                            <label className='flex flex-col md:flex-row gap-2'>
                                <span>password</span>
                                <input 
                                    type = "password"
                                    className='
                                        border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                        focus:outline-none
                                        '
                                    placeholder="enter password"
                                />
                            </label>
                            <input type='submit' value='ENTER' className='invisible'/>
                        </form>
                        
                        </div>
                        <Navbar 
                            right={[
                                { name: 'RESUME', event:'resume' },
                                { name: 'CONTACT', event:'contact' },
                                { name: 'BACK', event:(() => setView("select")) },
                            ]}
                        />
                        
                    </>
                );
            case "other":
                return (
                    <>
                        <form className='
                            inset-0 flex flex-col items-center justify-center absolute gap-6
                            font-body text-xl
                            '
                        >
                            <label className='flex flex-col md:flex-row gap-2'>
                                <span>username</span>
                                <input 
                                    type = "text"
                                    className='
                                        border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                        focus:outline-none
                                        '
                                    placeholder="enter username"
                                />
                            </label>
                            <label className='flex flex-col md:flex-row gap-2 md:ml-1'>
                                <span>password</span>
                                <input 
                                    type = "password"
                                    className='
                                        border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                        focus:outline-none
                                        '
                                    placeholder="enter password"
                                />
                            </label>
                            <input type='submit' value='ENTER' className='invisible'/>
                        </form>
                        <Navbar 
                            right={[
                                { name: 'RESUME', event:'resume' },
                                { name: 'CONTACT', event:'contact' },
                                { name: 'BACK', event:(() => setView("select")) },
                            ]}
                        />
                    </>
                );
        }
    }

    return (
        <>
            {renderView()}
        </>
    );
}

export default Signin;