import React from 'react';

function HeroItem ({alt, imgRef}){

    return(
        <>
            <img 
                src={imgRef} 
                alt={alt} 
                className=''
            />
        </>
    )
}

export default HeroItem