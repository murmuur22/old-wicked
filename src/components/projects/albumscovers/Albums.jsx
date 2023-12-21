import React, { useEffect, useState } from 'react';
import covers from './data/covers';
import Navbar from '../../Navbar';
import { useMultiRefs } from '../../../utility';
import { useBeforeUnload } from "react-router-dom";


function Albums(){
    const [ selectedImage, setSelectedImage ] = useState(0);
    const [fileRefs, addFileRef] = useMultiRefs();

    useEffect(() => {

        window.addEventListener('keydown', handleKeyDown, true)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);


    const renderView = () => {
        return (
            <div className='font-body'>
                <div className='h-screen w-full flex flex-col justify-center items-center'>
                    <div className='h-[90vh] w-11/12 mb-10 flex flex-row gap-6'>
                        <div className='h-full w-2/12 flex flex-col'>
                            <h1>Files</h1>
                            <div className='h-full flex flex-col gap-0 items-start border-black border-4 p-2'>
                                {covers.map(cover => (
                                    <button 
                                        className={`${selectedImage==cover.index ? 'text-white bg-black' : 'hover:text-white hover:bg-black'}`}
                                        onClick={() => setSelectedImage(parseInt(cover.index))}
                                        key={'button'+cover.id}   
                                    >
                                        {cover.filename}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className='h-full w-10/12 flex flex-col'>
                            <h1> Preview </h1>
                            <div className='w-full h-full border-4 border-black p-10'>
                                <div className='w-full relative'>
                                {covers.map(cover => (
                                    // TODO: Make contents remain in same place when changed
                                        <div 
                                            className={'w-full absolute' + ' ' + `${selectedImage==cover.index ? '' : 'hidden'}`}
                                            ref={addFileRef}
                                            key={'preview'+cover.id}
                                        >
                                            <div className='w-full flex flex-row justify-between gap-12'>
                                                <div className='flex flex-col justify-between'>
                                                    <div className='flex flex-col items-start'> 
                                                        <p className='font-sans font-bold text-6xl'>{cover.title}</p>
                                                        <p className='font-sans text-3xl'>by {cover.artist}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-12'> 
                                                        <p>{cover.about}</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col font-terminal'> 
                                                    <img
                                                        src={cover.src} 
                                                        alt={cover.filename}
                                                        className='w-[66vh] object-cover border-black border-2'
                                                    />
                                                    <div className='flex flex-col gap-0'> 
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>filename:</p> <p>{cover.filename}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>kind:</p> <p>{cover.kind}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>where:</p> <p>{'home > Imaging > projects > albums'}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>size:</p> <p>{cover.size}</p>
                                                        </div>
                                                        <div className='flex flex-row items-center justify-between'>
                                                            <p className=''>modifed:</p> <p>{cover.modified}</p>
                                                        </div>
                                                        <div className='flex flex-row items-center justify-between'>
                                                            <p className=''>dimensions:</p> <p>{cover.dimensions}</p>
                                                        </div>
                                                        <div className='flex flex-row items-center justify-between'>
                                                            <p className=''>status:</p> <p>{cover.status}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                

                <Navbar 
                    byLine={false}

                    left={[
                        { name : 'INSTAGRAM', event : 'instagram'},
                    ]}

                    right={[
                        { name : 'RESUME', event : 'resume'},
                        { name : 'CONTACT', event : 'contact'},
                        { name : 'BACK', event:(() => window.open('/#/imaging', '_self')), escapeEvent: true},
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

    function handleKeyDown(e) {
        if (e.key == 'Escape') {
            
        }
    }

}

export default Albums;