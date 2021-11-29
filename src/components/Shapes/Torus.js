import React from "react";
import { useFrame } from "@react-three/fiber";

import { SpeedMap } from "../../constants";

const Torus = React.forwardRef(
  ({ opacity, rotationSpeed, geometryArgs, meshPosition, ...rest }, ref) => {
    useFrame(() => {
      if (!!rotationSpeed) {
        ref.current.rotation.x += SpeedMap[rotationSpeed].x;
        ref.current.rotation.y += SpeedMap[rotationSpeed].y;
        ref.current.rotation.z += SpeedMap[rotationSpeed].z;
      }
    });

    return (
      <mesh position={meshPosition} ref={ref} {...rest}>
        <torusGeometry args={geometryArgs} />
        <meshNormalMaterial
          wireframe
          wireframeLinewidth={64}
          transparent={!!opacity}
          opacity={opacity}
        />
      </mesh>
    );
  }
);

export default Torus;
