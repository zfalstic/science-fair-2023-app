import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="navigation">
        <Link to={"/Angina/"}>Angina</Link>
        <Link to={"/ECG/"}>ECG</Link>
        <Link to={"/UCI/"}>UCI</Link>
      </div>
    </div>
  );
}
