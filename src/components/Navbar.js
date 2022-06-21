import logo from "../images/logo.png";

export default function Navbar() {

  return (
    <nav className="nav-bg">
      <div className="nav container">
      <div className="logo">
        <img src={logo} alt="Troll Face" />
        <h1 className="logo--title">Meme Generator</h1>
      </div>
      <h2 className="logo--content">React Course - Project 3</h2>
      </div>
    </nav>
  )
}
