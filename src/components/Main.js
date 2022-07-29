import React from "react";
// import memeDefault from "../images/memeimg.png";
import memes from "../memesData";

function Main() {
  //   console.log(memes.data.memes[Math.floor(Math.random()* 100)]);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memes);

  function getImg() {
    let meme =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ];
    let memeUrl = meme.url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: memeUrl,
      };
    });

    // console.log(memeUrl);
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
        <img src={meme.randomImg} alt="Meme" />
        <h2 className="meme--text top">One Of us</h2>
        <h2 className="meme--text bottom">Down here</h2>
      </div>

      {/* <img className="meme--img" src={meme.randomImg} alt="" /> */}
    </main>
  );
}

export default Main;
