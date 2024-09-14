"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Text3D,
  Center,
  OrbitControls,
  OrthographicCamera,
  Loader,
} from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, Suspense } from "react";
import * as THREE from "three";

const RotatingText = ({
  materialColor,
  canvasRef,
  onLoad,
}: {
  materialColor: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onLoad: () => void;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);
  const prevPointerXRef = useRef(0);
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onPointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      prevPointerXRef.current = e.clientX;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerXRef.current;
      targetRotationRef.current += deltaX * 0.005;
      prevPointerXRef.current = e.clientX;
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    // Call onLoad when the component is mounted
    onLoad();

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging, canvasRef, onLoad]);

  useFrame(() => {
    if (meshRef.current) {
      if (!isDragging) {
        targetRotationRef.current *= 0.95;
      }

      currentRotationRef.current +=
        (targetRotationRef.current - currentRotationRef.current) * 0.1;
      meshRef.current.rotation.y = currentRotationRef.current;
    }
  });

  const isTablet = viewport.width < 5; // Approximately 768px
  const scale = Math.min(1, viewport.width / 5);

  return (
    <mesh ref={meshRef} scale={[scale, scale, scale]}>
      <Center>
        {isTablet ? (
          <Text3D
            font="/Inter_Bold.json"
            size={0.6}
            height={0.2}
            curveSegments={32}
            position={[2.2, -0.2, 0]}
            lineHeight={0.6}
          >
            {"Janardan \n  Pethani"}
            <meshStandardMaterial color={materialColor} />
          </Text3D>
        ) : (
          <Text3D
            font="/Inter_Bold.json"
            size={0.7}
            height={0.3}
            curveSegments={32}
            position={[0, -1, 0]}
          >
            Janardan Pethani
            <meshStandardMaterial color={materialColor} />
          </Text3D>
        )}
      </Center>
    </mesh>
  );
};

const Name3D = () => {
  const { theme } = useTheme();
  const [materialColor, setMaterialColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMaterialColor(theme === "light" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div style={{ position: "relative", width: "100%", height: "22vh" }}>
      <Canvas style={{ touchAction: "none" }} ref={canvasRef}>
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <RotatingText
            materialColor={materialColor}
            canvasRef={canvasRef}
            onLoad={() => setIsLoading(false)}
          />
          <OrbitControls enabled={false} />
        </Suspense>
      </Canvas>
      {isLoading && (
        <Loader
          dataStyles={{
            color: theme === "light" ? "#000000" : "#ffffff",
            backgroundColor: "transparent",
          }}
        />
      )}
    </div>
  );
};

export default Name3D;
