import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => (
  <div className="ourmission-features-container-feature">
    <div className="ourmission-features-container-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="ourmission-features-container-feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;