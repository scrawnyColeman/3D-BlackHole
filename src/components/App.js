import React, { useRef } from "react";

import ThreeScene from "./ThreeScene/ThreeScene";
import Instructions from "./Instructions/Instructions";

const App = () => {
  const orbitRef = useRef();

  return (
    <>
      <Instructions ref={orbitRef} />
      <ThreeScene ref={orbitRef} />
    </>
  );
};

export default App;
