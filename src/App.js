import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./components/team/Pre";
import Navbar from "./components/team/Navbar";
import Home from "./components/team/Home/Home";
import About from "./components/team/About/About";
import Projects from "./components/team/Projects/Projects";
import Members from "./components/team/Member/Members";
import Footer from "./components/team/Footer";
import SamirResume from "./components/team/Resume/SamirResume";
import TomResume from "./components/team/Resume/TomResume";
import ScrollToTop from "./components/team/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={loading} />
      <div className="App" id={loading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Members />} />
          <Route path="/resume/samir" element={<SamirResume />} />
          <Route path="/resume/tom" element={<TomResume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;