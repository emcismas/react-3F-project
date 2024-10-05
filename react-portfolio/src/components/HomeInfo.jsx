import { render } from '@react-three/fiber';
import React from 'react';
import { Link } from 'react-router-dom';

//implement an arrow function to make the info reusable
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="">
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
      Hi, I'm <span className="font-semibold"> Ema </span>
    </h1>
  ),
  2: (
    <InfoBox
      text="Studied Software Development for 5 years and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Looking for a developer?"
      link="/contact"
      btnText="Contact me"
    />
  ),
  4: <h1></h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
