import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Client } from "./components/Client";
import { ClientPost } from "./assests/client2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client/>
      <ClientPost/>
    </div>
  );
}

export default App;
