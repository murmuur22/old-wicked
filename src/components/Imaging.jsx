// TODO: Organize imports
import React, { useEffect, useState, useRef } from 'react';
import { useBeforeUnload } from "react-router-dom";

import { siteVersion, author, logoRef } from '../data/sitevalues';
import heroImages from '../data/imaging/heroImages';
import HeroItem from './HeroItem';
import VerifyingClient from './VerifyingClient.jsx';
import Navbar from './Navbar';

import { useMultiRefs, randInt } from '../utility';

import projects from '../data/imaging/projects';
import ProjectsItem from './ProjectsItem'
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

function Imaging(){

    // Hooks
    const [ view, setView ] = useState('loading');
    const [projectRefs, addProjectRef] = useMultiRefs();
    const borderRef = useRef()
    const [ logoClicked, setLogoClicked ] = useState(false);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    

    useBeforeUnload(() => { // Runs on page unload
        sessionStorage.setItem('clickedProject', 'no');
    });

    useEffect(() => { // Runs on first page load

        if (sessionStorage.getItem('clickedProject') == 'yes'){
            
            setView('view')
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight});
            }, 100)
        }
        else {
            setTimeout(() => {
                setView('verified');
                setTimeout(() => {
                    setView('view');
                }, 700)
            }, randInt(100, 2000))
        }

    }, []);

    useEffect(() => { // Whenever the bottom section is in view or not

        if (inView==false) {
            setLogoClicked(false)
        } else {
            setLogoClicked(true)
        };
    }, [inView]);

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
                                <span>{siteVersion}</span> <span>by {author}</span>
                            </p>
                        </div>
                    </>
                );
            case 'view': // display images
                return (
                    <div className='animate-fadeIn'>
                        <div className={`${inView ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
                            <div className='columns-1 md:columns-2 gap-0'>
                                <div className=''>
                                    {heroImages.map(image => (
                                        <HeroItem
                                            key = {image.alt}
                                            alt = {image.alt}
                                            imgRef = {image.imgRef}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`${inView ? 'animate-fadeOut pointer-events-none' : 'animate-fadeIn'}`}>
                            <div className={'fixed inset-0 flex justify-center flex-col' + `${inView ? 'transition-transform duration-500 scale-125' : 'transition-transform duration-300 scale-100'}`}>
                                <div className='flex justify-center flex-col '>
                                <button 
                                    className={'flex flex-col items-center text-center hover:cursor-pointer' + 
                                        `${logoClicked ? 'transition duration-300 scale-125' : 'transition duration-300 hover:scale-125'}`
                                    }
                                    onClick={() => {
                                        setLogoClicked(true);
                                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                    }}
                                >
                                    <img 
                                        src={logoRef}
                                        alt='wicked logo'
                                        className='w-24 md:w-48'
                                        draggable={false}
                                    />
                                    <h1 className="text-4xl md:text-7xl pb-0 mb-0 md:mb-0 font-sans font-bold">wicked</h1>
                                    <h1 className="text-4xl md:text-7xl pt-0 mb-1 md:mb-3 font-light">.imaging</h1>
                                    <p className="text-xs md:text-sm mb-3 font-terminal">
                                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                                    </p>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className={'h-screen w-full flex flex-col justify-center items-center' + ' ' + `${inView ? 'opacity-0 animation-delay-400 animate-fadeIn' : 'animate-fadeOut pointer-events-none'}`}>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='mr-auto font-body text-xl'>{'home > Imaging > Projects'}</h1>
                                <div className='h-[75vh] w-[80vw] relative border-black border-4 overflow-hidden' ref={borderRef}>
                                    {projects.map((project, i) => (
                                        // TODO: make drag constraints not allow item to stay outside of border
                                        <motion.div
                                            drag
                                            whileDrag={{ scale: 1.2 }}
                                            dragMomentum={false}
                                            dragConstraints={borderRef}

                                            initial={{top: setPos('x'), left: setPos('y') }}

                                            className='absolute'
                                            key = {project.shorthand}
                                            ref={addProjectRef}
                                        >
                                            <ProjectsItem
                                                title={project.title}
                                                shorthand={project.shorthand}
                                                type={project.type}
                                                dest={project.dest}
                                                target={project.target}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-md ml-auto font-terminal">
                                    <span>{siteVersion}</span> <span>by {author}</span>
                                </p>
                            </div>
                        </div>
                        <div className='h-px' ref={ref}/>

                        <Navbar 
                            byLine={false}

                            left={[
                                { name : 'INSTAGRAM', event : 'instagram'},
                                { name : 'YOUTUBE', event : 'youtube'},
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

    function setPos(axis, max){
        switch (axis) {
            case 'x':
                return (
                    randInt(10, 90)+'%'
                )
            case 'y':
                return (
                    randInt(10, 80)+'%'
                )
        }
    }
}

export default Imaging;