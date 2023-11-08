import React from 'react'
import memesData from '../memesData';
import defaultImgd from "../images/spurs.png"

export default function Meme(){

    const [memeImage,setMemeImage] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : defaultImgd
    })

    const [allmeme,setAllMeme] = React.useState(memesData)

    function getMemeImage() {
        
        const meme = allmeme.data.memes
        const randomnumber = Math.floor(Math.random() * meme.length)
        const url = meme[randomnumber].url
        setMemeImage(prevImage => ({
            ...prevImage,
            randomImage : url
        }))
    }

    console.log(memeImage)
    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return(
        <main>
            <div className='form'>
                <input 
                    id='first' 
                    className='form-inputs' 
                    placeholder='Top text' 
                    type="text"
                    name='topText'
                    value={memeImage.topText}
                    onChange={handleChange}

                />
                <input 
                    id ='secondtext' 
                    className='form-inputs' 
                    placeholder='Buttom text' 
                    type="text"
                    name='bottomText'
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button className='button' onClick={getMemeImage} >Get A New Meme Image</button>
            </div>
            <div className="meme">
                <img className="meme--image" src ={memeImage.randomImage} alt=''></img>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    );
}