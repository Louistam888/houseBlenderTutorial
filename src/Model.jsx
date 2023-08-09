import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
  const gltf = useGLTF("../public/data/houseTutorial.glb");
  const modelRef = useRef();
  return (
    <>
      <mesh ref={modelRef}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
};

export default Model;
