import { render } from '@react-three/fiber';
import React from 'react';
import { Link } from 'react-router-dom';

//implement an arrow function to make the info reusable
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl py-2 text-center">{text}</p>

    <Link to={link} className="pop-white pop-btn">
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
    text-box py-4 px-8 text-white mx-5"
    >
      Hi, I'm <span className="font-semibold"> Ema! </span>
      <br></br>
      I'm a Web Developer/Data Engineer based in Timisoara.
    </h1>
  ),
  2: (
    <InfoBox
      text="I started my programming journey a few years back,  and I've picked up a passion for  creating exciting user experiences and finding patterns in everything involving data. "
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text=" Want to get in touch?"
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
