import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, Color } from 'three';

const PyramidDots = () => {
    const groupRef = useRef<Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Smooth rotation
            groupRef.current.rotation.y += 0.005;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

            // Animate colors for all children
            const time = state.clock.elapsedTime;
            const hue = ((time * 0.3) + 0.8) % 1; // Purple to pink cycle
            const color = new Color().setHSL(hue, 0.7, 0.6);

            groupRef.current.children.forEach((child, index) => {
                if (child.type === 'Mesh') {
                    const mesh = child as any;
                    if (mesh.material && mesh.material.color) {
                        // Slight variation in color timing for each dot
                        const dotHue = ((time * 0.3) + 0.8 + (index * 0.02)) % 1;
                        mesh.material.color.copy(new Color().setHSL(dotHue, 0.7, 0.6));
                    }
                }
            });
        }
    });

    // Create pyramid structure with dots
    const createPyramidDots = () => {
        const dots = [];
        const dotRadius = 0.08;
        let dotIndex = 0;

        // Layer 1 (base) - 5x5
        for (let x = -2; x <= 2; x++) {
            for (let z = -2; z <= 2; z++) {
                dots.push(
                    <mesh key={dotIndex++} position={[x * 0.4, -1.6, z * 0.4]}>
                        <sphereGeometry args={[dotRadius, 8, 8]} />
                        <meshBasicMaterial color="#8B5CF6" />
                    </mesh>
                );
            }
        }

        // Layer 2 - 4x4
        for (let x = -1.5; x <= 1.5; x += 1) {
            for (let z = -1.5; z <= 1.5; z += 1) {
                dots.push(
                    <mesh key={dotIndex++} position={[x * 0.4, -0.8, z * 0.4]}>
                        <sphereGeometry args={[dotRadius, 8, 8]} />
                        <meshBasicMaterial color="#8B5CF6" />
                    </mesh>
                );
            }
        }

        // Layer 3 - 3x3
        for (let x = -1; x <= 1; x++) {
            for (let z = -1; z <= 1; z++) {
                dots.push(
                    <mesh key={dotIndex++} position={[x * 0.4, 0, z * 0.4]}>
                        <sphereGeometry args={[dotRadius, 8, 8]} />
                        <meshBasicMaterial color="#8B5CF6" />
                    </mesh>
                );
            }
        }

        // Layer 4 - 2x2
        for (let x = -0.5; x <= 0.5; x += 1) {
            for (let z = -0.5; z <= 0.5; z += 1) {
                dots.push(
                    <mesh key={dotIndex++} position={[x * 0.4, 0.8, z * 0.4]}>
                        <sphereGeometry args={[dotRadius, 8, 8]} />
                        <meshBasicMaterial color="#8B5CF6" />
                    </mesh>
                );
            }
        }

        // Layer 5 (top) - 1 dot
        dots.push(
            <mesh key={dotIndex++} position={[0, 1.6, 0]}>
                <sphereGeometry args={[dotRadius, 8, 8]} />
                <meshBasicMaterial color="#8B5CF6" />
            </mesh>
        );

        return dots;
    };

    return (
        <group ref={groupRef}>
            {createPyramidDots()}
        </group>
    );
};

const AnimatedPyramid = () => {
    return (
        <div className="fixed bottom-20 left-20 w-48 h-48 pointer-events-none z-5">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <PyramidDots />
            </Canvas>
        </div>
    );
};

export default AnimatedPyramid;