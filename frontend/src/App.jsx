import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
