import React from "react";
import './Hero.css';
import img1 from './img/Safety icon.png';

function Hero() {
  return (
    <div className="hero">
      <div className="left">
<img src={img1} alt="" />
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
