import React from 'react';
import { skills, experiences, education } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Canvas } from '@react-three/fiber';
import Sky from '../assets/models/Sky';

const About = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="fixed top-28 bottom-20  left-0 right-0 z-10 flex items-center  justify-center">
        <section className="max-container bg-slate-100 rounded-2xl ">
          <h1 className="head-text">
            Hi, I'm{' '}
            <span className="purple-gradient_text font-semibold drop-shadow">
              Ema{' '}
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-slate-500 text-xl">
            <p>
              Web Application Developer, passionate about creating captivating
              user experiences.
            </p>
          </div>
        </section>
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{ near: 25, far: 1000 }}
      >
        <Sky />
      </Canvas>
    </section>
  );
};

export default About;
