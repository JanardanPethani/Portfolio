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
