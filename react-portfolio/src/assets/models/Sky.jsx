import React from 'react';
import { useGLTF } from '@react-three/drei';
import sky from '../3d/sky.glb';
const Sky = () => {
  const skyScene = useGLTF(sky);

  return (
    <mesh>
      <primitive object={skyScene.scene} />
    </mesh>
  );
};

export default Sky;
