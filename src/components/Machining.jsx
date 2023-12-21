import React, { useEffect, useState } from 'react';
import { siteVersion } from '../data/sitevalues';
import { randInt } from '../utility';

import VerifyingClient from './VerifyingClient.jsx';
import Navbar from './Navbar';


function Machining(){
    const [ view, setView ] = useState('loading')

    useEffect(() => {

        setTimeout(() => {
            setView('verified');
            setTimeout(() => {
                setView('view');
            }, 700)
        }, randInt(100, 2000))

    }, []);

    const renderView = () => {
        switch (view) {
            case 'loading': // loading screen
                return (
                    <>
                        <VerifyingClient />
                    </>
                );
            case 'verified': // verified screen
                return (
                    <>
                        <div className="fixed inset-0 flex items-center justify-center flex-col text-center">
                            <h1 className="text-2xl md:text-4xl pb-0 mb-0 font-display">verification complete!</h1>
                            <p className="fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                        </div>
                    </>
                );
            case 'view': // display images
                return (
                    <div className='animate-fadeIn'>
                        
                        <Navbar 
                            byLine={true}

                            left={[

                            ]}

                            right={[
                                { name : 'RESUME', event : 'resume'},
                                { name : 'CONTACT', event : 'contact'},
                                { name : 'SIGN OUT', event : 'signout'},
                            ]}
                        />
                    </div>
                );
        }
    }

    return (
    <>
        {renderView()}
    </>
    
    )

}

export default Machining;