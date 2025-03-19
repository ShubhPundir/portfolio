// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/allprojects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
