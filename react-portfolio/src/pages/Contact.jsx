import React from 'react';
import Sky from '../assets/models/Sky';
import { Canvas } from '@react-three/fiber';

const Contact = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="fixed top-36 bottom-20  left-0 right-0 z-10 flex  justify-center">
        <section className=" bg-slate-100 rounded-2xl px-1 mx-5">
          <h1 className="head-text px-4 pt-4">Contact me!</h1>

          <div className=" flex flex-col gap-3 text-slate-500 text-xl px-4">
            <p>My contact information:</p>
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

export default Contact;
