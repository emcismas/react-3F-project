import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../assets/models/Island';
import Sky from '../assets/models/Sky';
import HomeInfo from '../components/HomeInfo';
import Hint from '../components/Hint';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [-3, -10, -40];
    let rotation = [0.1, 3.95, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.02, 0.02, 0.0];
    } else {
      screenScale = [0.022, 0.025, 0.025];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIsland();

  return (
    <section className="w-screen h-screen relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center  justify-center">
        
        {currentStage && <HomeInfo currentStage={currentStage} />}
        <Hint/>
        // TODO: make it react to visible prop 
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
        
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
