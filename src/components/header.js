import React from 'react'
import img1 from '../images/TrollFace.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return(
        <header className='header'>
            <img  className='tf' src={img1} alt=''></img>
            <h2 className='memegen'>Meme Generator</h2>
            <h4 className='rjs'>ReactJS</h4>
        </header>
    );
}