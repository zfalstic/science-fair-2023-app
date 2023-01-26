import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Angina from "./pages/Angina/Angina";
import ECG from "./pages/ECG/ECG";
import UCI from "./pages/UCI/UCI";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Angina/" element={<Angina />} />
        <Route path="/ECG/" element={<ECG />} />
        <Route path="/UCI/" element={<UCI />} />
      </Routes>
    </div>
  );
}

export default App;
