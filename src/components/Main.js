import React from "react";
import meme from "../images/memeimg.png";
import memes from "../memesData";

function Main() {
  //   console.log(memes.data.memes[Math.floor(Math.random()* 100)]);

  const [memeImage, setMemeImage] = React.useState("");

  function getImg() {
    let meme =
      memes.data.memes[Math.floor(Math.random() * memes.data.memes.length)];
    let memeUrl = meme.url;

    setMemeImage(memeUrl);

    console.log(memeUrl);
  }

  return (
    <main className="container section">
      <div className="inputs">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </div>
      <button onClick={getImg} className="btn">
        Get a new meme image🖼
      </button>

      <div className="main-img">
        <img src={meme} alt="Meme" />
      </div>

      <img className="meme--img" src={memeImage} alt="" />
    </main>
  );
}

export default Main;
