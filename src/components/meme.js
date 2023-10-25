import React from 'react'
import memesData from '../memesData';

export default function Meme(){

    const [memeImage,setMemeImage] = React.useState()

    function getMemeImage() {
        
        const meme = memesData.data.memes
        const randomnumber = Math.floor(Math.random() * meme.length)
        const url = meme[randomnumber].url
        setMemeImage(url)
        // console.log(url)
    }
    let firsttext = document.getElementById('first')
    let secondtext = document.getElementById('secondtext')

    return(
        <main>
            <div className='form'>
                <input id='first' className='form-inputs' placeholder='Top text' type="text"></input>
                <input id ='secondtext' className='form-inputs' placeholder='Buttom text' type="text"></input>
                <button className='button' onClick={getMemeImage} >Get A New Meme Image</button>
            </div>
            <div>
                <img className='meme-img' src ={memeImage} alt=''></img>
                {/* <div><h1>{firsttext}</h1></div>
                <div><h1>{secondtext}</h1></div> */}
            </div>
        </main>
    );
}