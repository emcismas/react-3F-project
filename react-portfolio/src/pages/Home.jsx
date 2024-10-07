import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../assets/models/Island';
import Sky from '../assets/models/Sky';
import Plane from '../assets/models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [-3, -13, -40];
    let rotation = [0.1, 3.95, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.01, 0.01, 0.01];
    } else {
      screenScale = [0.023, 0.022, 0.023];
    }

    return [screenScale, screenPosition, rotation];
  };

  // const adjustPlane = () => {
  //   let screenScale = null;
  //   let screenPosition = [-30, 15, -30];
  //   let rotation = [0.3, 1.1, 0.7];
  //   if (window.innerWidth < 768) {
  //     screenScale = [1, 2, 2];
  //   } else {
  //     screenScale = [2, 3, 3];
  //   }

  //   return [screenScale, screenPosition, rotation];
  // };

  // const [planeScale, planePosition, planeRotation] = adjustPlane();
  const [islandScale, islandPosition, islandRotation] = adjustIsland();

  return (
    <section className="w-screen h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center  justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 25, far: 1000 }}
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
            setCurrentStage={setCurrentStage}
          />
          {/* <Plane
            scale={planeScale}
            position={planePosition}
            rotation={planeRotation}
            isRotating={isRotating}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
