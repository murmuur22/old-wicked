import React from 'react';
import { siteVersion, logoRef } from '../data/sitevalues';

function LoginItem ({alt, imgRef}){

    return(
    <div className="fixed inset-0 flex items-center justify-center flex-col text-center">
        <h1 className="text-2xl md:text-4xl pb-0 mb-0 font-display">verifying client...</h1>
        <p className="fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal">
            <span>{siteVersion}</span> <span>by robbie dyson</span>
        </p>
    </div>
)
}

export default LoginItem