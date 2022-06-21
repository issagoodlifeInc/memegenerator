import meme from "../images/memeimg.png";

function Main(){
    return(
        <main className="container section">
            <div className="inputs">
                <input type="text" placeholder="Shut up"/>
                <input type="text" placeholder="and take my money" />
            </div>
            <button className="btn">Get a new meme image🖼</button>
            <div className="main-img">
                <img src={meme} alt="Meme" />
            </div>
        </main>
    )
}

export default Main;