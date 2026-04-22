import "./Vista3d.css";
import React, { Suspense, useEffect, useRef } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Chiesa from "./components/Chiesa.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

function Vista3d() {
  const controlsRef = useRef();

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.object.position.set(0, -2, -10);
      controlsRef.current.update();
    }
  };

  const handleZoomIn = () => {
    const cam = controlsRef.current.object;
    cam.position.multiplyScalar(0.9); //avvicina del 10%
  };

  const handleZoomOut = () => {
    const cam = controlsRef.current.object;
    cam.position.multiplyScalar(1.1); //allontana del 10%
  };

  return (
    <>
      <Header />
      <div className="container-chiesa">
        <Canvas shadows camera={{ position: [0, -4, -10], fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              {/* position={[0, 1.5, 0]} alza la chiesa rispetto al centro dello stage */}
              <Chiesa scale={0.33} position={[0, 4.5, 0]} />
            </Stage>
          </Suspense>

          {/* Usiamo il Ref per controllare la camera */}
          <OrbitControls ref={controlsRef} makeDefault />
        </Canvas>
        <div className="container-chiesa-buttons">
          <button
            className="chiesa-buttons buttons-zoom"
            onClick={handleZoomIn}
          >
            +
          </button>
          <button
            className="chiesa-buttons buttons-zoom"
            onClick={handleZoomOut}
          >
            -
          </button>
          <button className="chiesa-buttons reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Vista3d;
