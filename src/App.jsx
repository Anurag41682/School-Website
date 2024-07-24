import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./section/Home";
import About from "./section/About/About";
import Academics from "./section/Academics/Academics";
import Admissions from "./section/Admissions";
import Contact from "./section/Contact";
import Faculty from "./section/Faculty";
import Gallery from "./section/Gallery";
import Students from "./section/Students";
import Navbar from "./section/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/students" element={<Students />} />
        </Routes>
        <footer>HI from footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
