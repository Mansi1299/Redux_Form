import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Infouser from "./Infouser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infouser" element={<Infouser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
