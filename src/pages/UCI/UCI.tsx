import React from "react";

import "./UCI.css";

export default function UCI() {
  return (
    <div>
      <form className="input-form">
        <label className="age">
          <p className="age__text">Age:</p>
          <input className="age__field" type="text"></input>
        </label>
        <label className="sex">
          <p className="sex__text">Sex:</p>
          <select className="sex__select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="chest-pain-type">
          <p className="chest-pain-type__text">Chest Pain Type:</p>
          <select className="chest-pain-type__select">
            <option value="typical-angina">Typical Angina</option>
            <option value="atypical-angina">Atypical Angina</option>
            <option value="non-anginal-pain">non-Anginal Pain</option>
            <option value="asymptomatic">Asymptomatic</option>
          </select>
        </label>
        <label className="resting-blood-pressure">
          <p className="resting-blood-pressure__text">
            Resting Blood Pressure (mm Hg):
          </p>
          <input className="resting-blood-pressure__field" type="text"></input>
        </label>
        <label className="cholesterol">
          <p className="cholesterol__text">Cholesterol (mg/dl):</p>
          <input className="cholesterol__field" type="text"></input>
        </label>
        <label className="fasting-blood-sugar">
          <p className="fasting-blood-sugar__text">
            Fasting Blood Sugar (mg/dl):
          </p>
          <input className="fasting-blood-sugar__field" type="text"></input>
        </label>
        <label className="rest-ecg">
          <p className="rest-ecg__text">Resting ECG Type:</p>
          <select className="rest-ecg__select">
            <option value="normal">Normal</option>
            <option value="st-t-abnormality">ST-T wave abnormailty</option>
            <option value="left-ventricular-hypertrophy">
              Left Ventricular Hypertrophy
            </option>
          </select>
        </label>
        <label className="max-heart-rate">
          <p className="max-heart-rate__text">Maximum Heart Rate:</p>
          <input className="max-heart-rate__field" type="text"></input>
        </label>
        <label className="exercise-chest-pain">
          <p className="exercise-chest-pain__text">Exercise Chest Pain:</p>
          <select className="exercise-chest-pain__select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="old-peak">
          <p className="old-peak__text">ST Depression Relative to Rest:</p>
          <input className="old-peak__field" type="text"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
