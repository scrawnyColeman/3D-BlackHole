import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import { Sphere, Torus } from "../Shapes";

import { Speeds } from "../../constants";

import { StyledCanvas } from "./ThreeScene.styled";

const ThreeScene = React.forwardRef((_, orbitRef) => {
  const outerTorusRef = useRef();
  const innerTorusRef = useRef();
  const canvasRef = useRef();

  return (
    <StyledCanvas ref={canvasRef} camera={{ fov: 40, position: [1.3, 0.4, 0] }}>
      <OrbitControls
        ref={orbitRef}
        enableZoom
        zoomSpeed={0.5}
        enableRotate
        enablePan
      />
      <group position={[0, 0, 0]}>
        <Sphere
          geometryArgs={[0.25, 128, 128, 0, Math.PI * 2, Math.PI * 2, Math.PI]}
        />
        <Torus
          ref={outerTorusRef}
          rotationSpeed={Speeds.FAST}
          geometryArgs={[0.55, 0.2, 64, 128, Math.PI * 2]}
          rotation={[-Math.PI * 2, Math.PI, 0]}
          opacity={1}
        />
        <Torus
          rotationSpeed={Speeds.SLOW}
          ref={innerTorusRef}
          geometryArgs={[1.25, 0.2, 32, 128, Math.PI * 2]}
          rotation={[-Math.PI, Math.PI * 0.75, 0]}
          opacity={1}
        />
      </group>
    </StyledCanvas>
  );
});

export default ThreeScene;
