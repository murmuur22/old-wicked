import React from 'react';

import folder from '/assets/icons/folder.png';
import file from '/assets/icons/file.png';
import mov from '/assets/icons/mov.png';

import { motion } from 'framer-motion'

function ProjectsItem ({title, shorthand, type, dest, target}){

    const handleClick = () => {
        sessionStorage.setItem('clickedProject', 'yes');
        window.open(dest, target);
    }

    const renderItem = () => {
        switch (type) {
            case 'group':
                return(
                    <motion.button 
                        className='cursor-pointer group hover:bg-black'
                        onTap={handleClick}
                    >
                        <img
                            src={folder} 
                            alt={title}
                            draggable={false}
                            className='w-36 h-36 object-cover group-hover:invert'
                        />
                        <h3 className='text-lg md:text-xl font-body text-center group-hover:text-white group-hover:underline underline-offset-1 decoration-2'>/{shorthand}</h3>
                    </motion.button> 
                );
            case 'project':
                return(
                    <motion.button 
                        className='cursor-pointer group hover:bg-black'
                        onTap={handleClick}
                    >
                        <img
                            src={file} 
                            alt={title}
                            draggable={false}
                            className='w-36 h-36 object-cover group-hover:invert'
                        />
                        <h3 className='text-lg md:text-xl font-body text-center group-hover:text-white group-hover:underline underline-offset-1 decoration-2'>{shorthand}.proj</h3>
                    </motion.button> 
                );
            case 'movie':
                return(
                    <motion.button 
                        className='cursor-pointer group hover:bg-black'
                        onTap={handleClick}
                    >
                        <img
                            src={mov} 
                            alt={title}
                            draggable={false}
                            className='w-36 h-36 object-cover group-hover:invert'
                        />
                        <h3 className='text-lg md:text-xl font-body text-center group-hover:text-white group-hover:underline underline-offset-1 decoration-2'>{shorthand}.mov</h3>
                    </motion.button> 
                );
        }
    }

    return (
        <>
            {renderItem()}
        </>
    )
}

export default ProjectsItem;