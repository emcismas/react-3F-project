import React from 'react';
import plane from '../3d/paper_plane.glb';
import { useGLTF } from '@react-three/drei';
const Plane = () => {
  const { scene, animations } = useGLTF(plane);
  return (
    <mesh
      position={[-5, 2, 1]}
      scale={[0.5, 0.5, 0.27]}
      rotation={[0.1, 1.8, 0.8]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
