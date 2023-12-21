import React, { useEffect, useState } from 'react';
import stickers from './data/stickers';
import Navbar from '../../Navbar';
import { useMultiRefs } from '../../../utility';


function Stickers(){
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
                                {stickers.map(sticker => (
                                    <button 
                                        className={`${selectedImage==sticker.index ? 'text-white bg-black' : 'hover:text-white hover:bg-black'}`}
                                        onClick={() => setSelectedImage(parseInt(sticker.index))}
                                        key={'button'+sticker.filename}   
                                    >
                                        {sticker.filename}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className='h-full w-10/12 flex flex-col'>
                            <h1> Preview </h1>
                            <div className='w-full h-full border-4 border-black p-10'>
                                <div className='w-full relative'>
                                {stickers.map(sticker => (
                                    // TODO: Make contents remain in same place when changed
                                        <div 
                                            className={'w-full absolute' + ' ' + `${selectedImage==sticker.index ? '' : 'hidden'}`}
                                            ref={addFileRef}
                                            key={'preview'+sticker.filename}
                                        >
                                            <div className='w-full flex flex-row justify-center'>
                                                <div className='flex flex-col font-terminal'> 
                                                    <img
                                                        src={sticker.src} 
                                                        alt={sticker.filename}
                                                        className='w-[60vh] object-sticker border-black border-2'
                                                    />
                                                    <div className='flex flex-col gap-0'> 
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>filename:</p> <p>{sticker.filename}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>kind:</p> <p>{sticker.kind}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>where:</p> <p>{'home > Imaging > projects > albums'}</p>
                                                        </div>
                                                        <div className='flex flex-row items-start justify-between'>
                                                            <p className=''>size:</p> <p>{sticker.size}</p>
                                                        </div>
                                                        <div className='flex flex-row items-center justify-between'>
                                                            <p className=''>modifed:</p> <p>{sticker.modified}</p>
                                                        </div>
                                                        <div className='flex flex-row items-center justify-between'>
                                                            <p className=''>dimensions:</p> <p>{sticker.dimensions}</p>
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

    }

}

export default Stickers;