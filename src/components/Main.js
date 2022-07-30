import React from "react";
// import memeDefault from "../images/memeimg.png";
// import memes from "../memesData";

function Main() {
  //   console.log(memes.data.memes[Math.floor(Math.random()* 100)]);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMeme, setAllMeme] = React.useState();

  React.useEffect(() => {
    // Using fetch
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((response) => response.json())
    //   .then((data) => setAllMeme(data.data.memes));

    // Using async function
    async function geteMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMeme(data.data.memes);
    }

    geteMemes();
  }, []);

  function getImg() {
    let meme = allMeme[Math.floor(Math.random() * allMeme.length)];
    let memeUrl = meme.url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: memeUrl,
      };
    });
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="container section">
      <div className="inputs">
        <input
          type="text"
          placeholder="Shut up"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
      </div>
      <button onClick={getImg} className="btn">
        Get a new meme image🖼
      </button>

      <div className="main-img">
        <img src={meme.randomImg} alt="Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      {/* <img className="meme--img" src={meme.randomImg} alt="" /> */}
    </main>
  );
}

export default Main;
