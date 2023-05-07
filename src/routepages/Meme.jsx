import React from "react";
import meme1 from './DadMeme17.jpg';
import meme2 from './meme2.jpg';
import meme3 from './meme3.jpeg';
import meme4 from './meme4.jpg';

const Meme = () => {
    return(
        <div className="memes">
            <h1>Some Dad Memes to get you through the day:</h1>
            <img src={meme1} width="500" height="500"></img>
            <br/>
            <img src={meme2} width="500" height="500"></img>
            <br/>
            <img src={meme3} width="500" height="500"></img>
            <br/>
            <img src={meme4} width="500" height="500"></img>
            <br/>
            <p>For legal purposes this is a joke. Jk.</p>
        </div>
    )
}

export default Meme;
