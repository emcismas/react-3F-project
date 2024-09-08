import React from 'react';
import Sky from '../assets/models/Sky';
import { Canvas } from '@react-three/fiber';

const About = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas>
        <Sky />
      </Canvas>
    </section>
  );
};

export default About;
