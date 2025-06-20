import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Create/Home";
import Section from "./Create/Section";
import Navbar from "./Create/Navbar";

const App = () => {
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
          background: "rgb(0, 255, 98)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            marginTop: "40px",
            marginLeft: "40px",
            marginRight: "40px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Navbar />
          <div style={{ flex: 1, overflow: "hidden" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/employers" element={<Section title="Employers" />} />
              <Route path="/consultants" element={<Section title="Consultants" />} />
              <Route path="/register" element={<Section title="Register" />} />
              <Route path="/contact" element={<Section title="Contact" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
