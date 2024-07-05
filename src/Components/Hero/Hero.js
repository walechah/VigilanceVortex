import React from "react";
import safety from "./Safety icon.png";
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <img src={safety} alt="Safety Icon" />
      </div>
      <div className="right">
        <h2>
          Utilizing cutting-edge predictive analytics, our platform identifies high-risk areas for crime and violence. By analyzing historical data and real-time inputs, we provide actionable insights to enhance public safety and enable proactive law enforcement measures. Transforming data into safety, one prediction at a time.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
