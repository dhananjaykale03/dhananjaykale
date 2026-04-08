import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Color } from 'three';

const WireframeCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.003;
      
      // Animate colors - vibrant gradient cycle (blue, purple, pink, orange)
      const time = state.clock.elapsedTime;
      const hue = ((time * 0.3) % 1); // Full color spectrum
      const color = new Color().setHSL(hue, 0.9, 0.65);
      
      if (meshRef.current.material && 'color' in meshRef.current.material) {
        (meshRef.current.material as any).color.copy(color);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial wireframe color="#EC4899" />
    </mesh>
  );
};

const LeftWireframeCube = () => {
  return (
    <div className="fixed bottom-20 left-20 w-40 h-40 pointer-events-none z-5">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-lg animate-pulse"></div>}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.3} />
          <WireframeCube />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default LeftWireframeCube;