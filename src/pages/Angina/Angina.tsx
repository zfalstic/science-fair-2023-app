import React from "react";

import "./Angina.css";

export default function Angina() {
  return (
    <div>
      <form className="input-form">
        <label className="calcium-score">
          <p className="calcium-score__text">Calcium Score:</p>
          <input className="calcium-score__field" type="text"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
