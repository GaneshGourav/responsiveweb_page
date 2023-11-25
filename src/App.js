import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Client } from "./components/Client";
import { ClientPost } from "./assests/client2";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Client/>
      <ClientPost/>


      
      <Footer/>
    </div>
  );
}

export default App;
