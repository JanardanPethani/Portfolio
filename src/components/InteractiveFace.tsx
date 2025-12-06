"use client";
import React, { useEffect, useRef } from "react";
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
    if (!rive || !isLight) return;
    // Rive API requires direct mutation of state machine input values
    // eslint-disable-next-line react-hooks/immutability
    isLight.value = resolvedTheme === "dark";
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
