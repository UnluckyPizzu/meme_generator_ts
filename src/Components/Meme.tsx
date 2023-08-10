import React, { FormEvent } from "react"
import running from "./img/Running-Away-Balloon.jpg"
import {MemeNetwork, MemesNetwork} from "./img/type"

type Meme = {
    topText : string,
    bottomText : string,
    image : string

}

export function Meme() {
    const[meme,setMeme] = React.useState<Meme>({
        topText : "",
        bottomText : "",
        image : running
    })

    const [allMemes,setAllMemes] = React.useState<string[]>([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then((data : MemesNetwork) => setAllMemes(data.data.memes.map((x : MemeNetwork) => x.url)))
    }, []
    )

    function getMeme() {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random]
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }))
    }


    function setTopText(value : string) {
        setMeme((lastMeme) => ({
            ...lastMeme,
            topText : value
        }))
    }

    function setBottomText(value : string) {
        setMeme((lastMeme) => ({
            ...lastMeme,
            bottomText : value
        }))
    }




    return (
        <main>
            <div className="grid-form">
                <input id="top-text" onChange={(e) => setTopText(e.target.value)} className="form-input" type="text" placeholder="Top text"/>
                <input id="bottom-text" onChange={(e) => setBottomText(e.target.value)} className="form-input" type="text" placeholder="Bottom text"/>
                <button onClick={getMeme} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-container">
                <img src={meme.image} alt="Meme Background"/>
                <div className="top-caption">{meme.topText}</div>
                <div className="bottom-caption">{meme.bottomText}</div>
            </div>
        </main>
    )
}