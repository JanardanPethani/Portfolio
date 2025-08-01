"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";

import { parseFloatToFixed } from "@/utils/math";

const slowMovementFactor = 0.2;
const mediumMovementFactor = 0.3;
const highMovementFactor = 0.5;

const getMovementReaction = (
  movement: number,
  factor: number = highMovementFactor
) => parseFloatToFixed(movement * factor);

const InteractiveFace = ({ className = "" }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const { rive, RiveComponent } = useRive({
    src: "face.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
  });

  // State machine inputs for different face parts
  const faceMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "faceMovement"
  );
  const eyesMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "eyesMovement"
  );
  const eyebrowsMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "eyebrowsMovement"
  );
  const hairMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "hairMovement"
  );
  const specsMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "specsMovement"
  );
  const lipsMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "lipsMovement"
  );
  const earsMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "earsMovement"
  );
  const noseMovement = useStateMachineInput(
    rive,
    "State Machine 1",
    "noseMovement"
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const moveFactor = 30; // Control how much the elements should move

      const moveX = parseFloatToFixed((x / rect.width - 0.5) * moveFactor);
      const moveY = parseFloatToFixed((y / rect.height - 0.5) * moveFactor);

      // Update Rive state machine inputs for different face parts
      if (faceMovement) {
        faceMovement.value = getMovementReaction(moveX, slowMovementFactor);
      }
      if (eyesMovement) {
        eyesMovement.value = getMovementReaction(moveX, highMovementFactor);
      }
      if (eyebrowsMovement) {
        eyebrowsMovement.value = getMovementReaction(
          moveX,
          mediumMovementFactor
        );
      }
      if (hairMovement) {
        hairMovement.value = getMovementReaction(moveX, slowMovementFactor);
      }
      if (specsMovement) {
        specsMovement.value = getMovementReaction(moveX, slowMovementFactor);
      }
      if (lipsMovement) {
        lipsMovement.value = getMovementReaction(moveX, mediumMovementFactor);
      }
      if (earsMovement) {
        earsMovement.value = getMovementReaction(moveX, slowMovementFactor);
      }
      if (noseMovement) {
        noseMovement.value = getMovementReaction(moveX, slowMovementFactor);
      }
    },
    [
      faceMovement,
      eyesMovement,
      eyebrowsMovement,
      hairMovement,
      specsMovement,
      lipsMovement,
      earsMovement,
      noseMovement,
    ]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const isLight = useStateMachineInput(rive, "State Machine 1", "Light");
  useEffect(() => {
    if (!rive) return;
    // Apply theme-based styling to the Rive canvas
    // @ts-ignore
    const canvas = rive.canvas as HTMLCanvasElement;
    if (isLight) {
      if (resolvedTheme === "dark") {
        isLight.value = true;
      } else {
        isLight.value = false;
      }
    }
  }, [isLight, resolvedTheme, rive]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-72 overflow-visible ${className}`}
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
};

export default InteractiveFace;
