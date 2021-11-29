import React from "react";

const Sphere = ({ geometryArgs }) => (
  <mesh>
    <sphereGeometry args={geometryArgs} />
    <meshNormalMaterial colorWrite={false} />
  </mesh>
);

export default Sphere;
