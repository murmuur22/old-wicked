import Navbar from '../../Navbar';
import React, { useEffect, useState, useRef } from 'react';
import { siteVersion, author } from '../../../data/sitevalues';



function AmIAlive(){
    const [ buttonText, setButtonText ] = useState('DARK MODE')

    const renderView = () => {
        return (
            <div className={'font-body ' + `${buttonText === 'DARK MODE' ? '' : 'bg-black text-white'}`}>
                <div className='h-screen flex flex-col justify-center items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-black'>am_i_alive.mov</h1>
                    <iframe
                        className='h-[75vh] w-[80vw]'
                        src="https://www.youtube-nocookie.com/embed/9B-WfoZXBKk" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen     
                    />
                </div>
                <p className="text-black text-md font-terminal">
                    <span>{siteVersion}</span> <span>by {author}</span>
                </p>
                    
                </div>

                <Navbar 
                    byLine={false}

                    left={[
                        { name : buttonText, event : (() => setButtonText((curr) => (curr === 'DARK MODE' ? 'LIGHT MODE' : 'DARK MODE')))},
                    ]}

                    right={[
                        { name : 'RESUME', event : 'resume'},
                        { name : 'CONTACT', event : 'contact'},
                        { name : 'BACK', event:(() => window.open('/#/imaging', '_self')), escapeEvent : true},
                    ]}
                />
            </div>
        );
    }

    return (
    <>
        {renderView()}
    </>
    )
}

export default AmIAlive;