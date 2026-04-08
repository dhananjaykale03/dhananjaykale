import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Color } from 'three';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;
      
      // Animate colors - emerald to blue gradient cycle
      const time = state.clock.elapsedTime;
      const hue = ((time * 0.3) % 1) * 0.33 + 0.45; // Emerald to blue range
      const color = new Color().setHSL(hue, 0.85, 0.55);
      
      if (meshRef.current.material && 'color' in meshRef.current.material) {
        (meshRef.current.material as any).color.copy(color);
        (meshRef.current.material as any).emissive.copy(new Color().setHSL(hue, 0.4, 0.2));
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4A90E2" />
    </mesh>
  );
};

const RotatingCube = () => {
  return (
    <div className="fixed top-20 right-20 w-48 h-48 pointer-events-none z-5">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-lg animate-pulse"></div>}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default RotatingCube;