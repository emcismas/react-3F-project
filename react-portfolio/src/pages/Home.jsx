import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../assets/models/Island';
import Sky from '../assets/models/Sky';
const Home = () => {
  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [-5, -9.5, -44];
    let rotation = [0.1, 4, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
    } else {
      screenScale = [0.025, 0.023, 0.025];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] = adjustIsland();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
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
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
