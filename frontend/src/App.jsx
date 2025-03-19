import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
