import React from 'react';
import plane from '../3d/paper_plane.glb';
import { useGLTF } from '@react-three/drei';
const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(plane);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
