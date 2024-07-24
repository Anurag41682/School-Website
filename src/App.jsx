import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./section/Home";
import About from "./section/About/About";
import Academics from "./section/Academics/Academics";
import Admissions from "./section/Admissions/Admissions";
import Contact from "./section/Contact";
import Faculty from "./section/Faculty";
import Gallery from "./section/Gallery";
import Students from "./section/Students";
import Navbar from "./section/Navbar";
import Footer from "./section/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
