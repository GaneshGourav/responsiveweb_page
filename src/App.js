import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Client } from "./components/Client";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client/>
    </div>
  );
}

export default App;
