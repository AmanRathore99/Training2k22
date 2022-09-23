import React from "react";
import "./Meme.css";
import memesData from "../../data/memesData";
export default function Meme() {
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/30b1gx.jpg"
  );

  const changeMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };

  const handleTop = (e) => {
    setTopText(e.target.value);
  };

  const handleBottom = (e) => {
    setBottomText(e.target.value);
  };
  return (
    <div>
      <main>
        <form className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            value={topText}
            onChange={handleTop}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            value={bottomText}
            onChange={handleBottom}
          />
          <button
            type="button"
            className="form--button"
            onClick={changeMemeImage}
          >
            Get a new meme image
          </button>
        </form>
        <img src={memeImage} className="imgMeme" alt="imgs" />
        <h1 className="topText">{topText}</h1>
        <h1 className="bottomText">{bottomText}</h1>
      </main>
    </div>
  );
}
