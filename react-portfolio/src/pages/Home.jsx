import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../assets/models/Island';
import Sky from '../assets/models/Sky';
import Plane from '../assets/models/Plane';
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [-5, -9.5, -44];
    let rotation = [0.1, 4, 0];
    if (window.innerWidth < 768) {
      // screenScale = [0.2, 0.2, 0.2];
    } else {
      screenScale = [0.025, 0.023, 0.025];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlane = () => {
    let screenScale = null;
    let screenPosition = [-30, 10, -30];
    let rotation = [0.3, 1.1, 0.7];
    if (window.innerWidth < 768) {
      // screenScale = [0.2, 0.2, 0.2];
    } else {
      screenScale = [2, 3, 3];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [planeScale, planePosition, planeRotation] = adjustPlane();
  const [islandScale, islandPosition, islandRotation] = adjustIsland();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 30, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={3} />
          <ambientLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={2}
          />
          <Sky />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            rotation={planeRotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
