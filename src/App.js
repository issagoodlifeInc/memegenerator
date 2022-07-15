import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  // const thingsArray = ["Thing 1", "Thing 2"];
  // const thing = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* {thing} */}
    </div>
  );
}

export default App;
