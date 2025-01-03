"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { parseFloatToFixed } from "@/utils/math";

const slowMovementFactor = 0.2;
const mediumMovementFactor = 0.3;
const highMovementFactor = 0.5;

const movementArray = [
  { id: "#Face", movement: slowMovementFactor, isNested: false },
  { id: "#Eyes", movement: highMovementFactor, isNested: true },
  { id: "#Eyebrows", movement: mediumMovementFactor, isNested: true },
  { id: "#Hair", movement: slowMovementFactor, isNested: false },
  { id: "#Specs", movement: slowMovementFactor, isNested: false },
  { id: "#Lips", movement: mediumMovementFactor, isNested: false },
  { id: "#Ears", movement: slowMovementFactor, isNested: false },
  { id: "#Nose", movement: slowMovementFactor, isNested: false },
];

const getMovementReaction = (
  movement: number,
  factor: number = highMovementFactor
) => parseFloatToFixed(movement * factor);

const InteractiveFace = () => {
  const { resolvedTheme } = useTheme();

  const svgRef = useRef<SVGSVGElement>(null);
  const [svgColors, setSvgColors] = useState({
    fillColor: "#000",
    strokeColor: "#fff",
  });
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveFactor = 30; // Control how much the elements should move

    const moveX = parseFloatToFixed((x / rect.width - 0.5) * moveFactor);
    const moveY = parseFloatToFixed((y / rect.height - 0.5) * moveFactor);

    movementArray.forEach((config) => {
      if (config.isNested) {
        svg.querySelectorAll(config.id).forEach((eye) => {
          (eye as SVGPathElement).setAttribute(
            "transform",
            `translate(${getMovementReaction(
              moveX,
              config.movement
            )}, ${getMovementReaction(moveY, config.movement)})`
          );
        });
      } else {
        svg
          .querySelector(config.id)
          ?.setAttribute(
            "transform",
            `translate(${getMovementReaction(
              moveX,
              config.movement
            )} ${getMovementReaction(moveY, config.movement)})`
          );
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    setSvgColors({
      fillColor: resolvedTheme === "dark" ? "#000" : "#fff",
      strokeColor: resolvedTheme === "dark" ? "#fff" : "#000",
    });
  }, [resolvedTheme]);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 532.58 642.85"
      className="w-full h-72 overflow-visible"
      stroke={svgColors.strokeColor}
      fill="transparent"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            id="Face"
            d="M57.84,279.55a88.41,88.41,0,0,1,4.36-45.41,78.72,78.72,0,0,1,8.08-15.8c37.2-55.76,84.05-69.71,121.87-84a91.51,91.51,0,0,1,15.39-4.37c39.27-7.39,76.1-1.18,142,18.29a266.5,266.5,0,0,1,120.65,75.57s77,86.81,46,218.56S403.26,626.17,403.26,626.17s-79.34,47.63-242-74.14c-1.09-.82-2.2-1.62-3.33-2.38-6.53-4.44-34.19-24-53.91-49.59a89.14,89.14,0,0,1-17.24-40.3Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="15"
          />
          <g id="Ears">
            <g>
              <path
                d="M89.66,323.88c-5.82-6.74-26.35-9-35.24-4.6C29,331.8-.48,370.17,9.49,410.17c13.75,55.2,73.75,67.44,105.19,49.54C140.05,445.26,115.37,353.65,89.66,323.88Z"
                stroke="currentColor"
                fill={svgColors.fillColor}
                strokeMiterlimit="10"
                strokeWidth="15"
              />
              <line
                x1="69.65"
                y1="375.28"
                x2="76.98"
                y2="407.29"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="17"
              />
            </g>
          </g>
          <g id="Hair">
            <path
              d="M159.78,242.17c3,22.72,13.17,82.5-23.66,159.32-3.4,7.11-11.55,4.34-13-.72-7.17-24.66-26.4-78.76-57.43-84.3-36.93-6.59-43.41-119.26-43.41-119.26s-10.63-72.79,89-118.5c4.9-2.25,6.06-8,2.29-11.66l-9.42-9.12c-3.66-3.54-1.92-9.22,3.23-10.56,20.25-5.23,64.38-15.93,100.12-19.54,7.18-.72,8.54-1.21,5.48-4.66a18.2,18.2,0,0,1-5-9.31s-1.05-9.44,7.91-12.32c21.79-7,232.91,56.09,278.81,112,19.53,23.77,25.05,42.52,24,58.9,0,.62-.09,1.24-.15,1.85-2.24,23.64-13.64,52.62-37.12,58.06-89,20.63-268.26,17-314.39,5.79C161.87,236.86,159.14,237.23,159.78,242.17Z"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="15"
              fill={svgColors.fillColor}
            />
          </g>
          <g id="Specs">
            <path
              d="M531.47,272.33a4.15,4.15,0,0,0-3.93-4.11,113.21,113.21,0,0,1-15-1.87c-29.32-5.1-57.67-4.3-66.64-3.32-10.59,1.14-37.19,7.23-37.19,7.23-21.45,6.47-37.79,0-37.79,0-46-15.32-100.42-4.43-100.42-4.43L165.66,282.17,43.72,303.71c-4.36,2-10.37,5.12-13,7.4-11.25,9.59-18.14,34-19.31,41.26a2.67,2.67,0,0,0,4.33,2.51l.08-.07c2.18-2,5-13.2,8.94-21.23,4.77-9.68,17.44-16.87,21.84-18.52a16.73,16.73,0,0,1,4-1l200.61-22.44a2.22,2.22,0,0,1,2.35,2.51c-.83,21.42,3.79,34.2,9.64,43.82,4,6.51,11.42,16.73,28.89,20.79,15.92,3.71,43.57,1.84,57.7-5.79,21.45-11.57,26.51-32.52,30.13-44.59,1.53-5.11,7.66-25.36,18.89-7.49,10.12,16.09,13,34.73,33.19,49,11.83,8.38,28.56,12.34,48.85,9.19,12.09-1.87,17.2-3.4,25.71-9.19,19.75-13.43,18.89-42.38,18.74-51.05a7.1,7.1,0,0,1,2.72-6.12l.54-.38a7.28,7.28,0,0,0,3.07-6ZM353.83,331.54c-3.34,5.1-9.37,12.59-20.6,15.83-9.1,2.12-23.32,4.51-40.77-1.11-3.93-1.27-9-4.74-13.36-8.6-12.42-11.06-15-35.19-10.58-45.49,1.9-4.44,6.57-11,10.45-14l.11-.08c7.93-6,14.06-6.65,19.43-7.22,6-.64,20.25-1.11,27.15-1s22.25,1.11,30,8.25c3.93,3.62,5.51,8.13,6.45,11.2C362.66,291.75,366.34,312.39,353.83,331.54Zm153.59.19c-2.77,4.2-7.76,9.41-12.64,12.13a47.16,47.16,0,0,1-8.74,3.61c-15.4,5.21-41.59,1.2-52.72-10a67.71,67.71,0,0,1-8.64-11.17c-.51-.85-1.69-3-3.13-5.92-2.23-4.49-3.91-10.78-5.6-19.16-1.57-7.79,2.83-15.88,3.92-17.53,2.62-4,7.71-6.58,13.79-8.68a84.29,84.29,0,0,1,28.93-4.94c18.73.34,37.6,1.71,45.51,10.09,4,4.29,5.22,7.61,5.9,11.27C516.85,306.8,514.32,321.28,507.42,331.73Z"
              stroke="currentColor"
              fill={svgColors.strokeColor}
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </g>
          <g id="Nose">
            <path
              d="M388.89,350.94c4.34,5.25,21.28,47.83,23,78.64.83,15.1-12.77,20.42-24.27,18.3-5.51-1-10.42-1.89-13.52-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="11"
            />
          </g>
          <g id="Lips">
            <path
              d="M320.72,508.73c0,2.17,49.11,27.45,85,0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="11"
            />
          </g>
          <g id="Eyebrows">
            <path
              d="M371.49,252.77c2.42.86,6.46,8.85,2.68,13.25-3.39,3.94-53.29-10.92-56.74-11.67-2.68-.7-24.67-6-54.67,4.36-11.17,3.86,7.49-19.42,52.77-14.94S369.53,251.73,371.49,252.77Z"
              stroke="currentColor"
              fill={svgColors.strokeColor}
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <path
              d="M405.88,251.92c-2.42.86-6.46,8.85-2.68,13.25,3.38,3.94,53.16-10.92,56.6-11.67,2.68-.7,24.61-6,54.54,4.35,11.15,3.87-7.47-19.41-52.64-14.93S407.83,250.88,405.88,251.92Z"
              stroke="currentColor"
              fill={svgColors.strokeColor}
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </g>
          <g id="Eyes">
            <path
              d="M333,289.54l5.32-9.09c-3.11-6.51-7.94-10.7-13.36-10.7-9.37,0-17,12.52-17,28s7.61,28,17,28,17-12.51,17-28a44.73,44.73,0,0,0-.74-8.17Z"
              stroke="currentColor"
              fill={svgColors.strokeColor}
              strokeMiterlimit="10"
            />
            <path
              d="M460.76,289.81l5.31-9.08c-3.1-6.51-7.93-10.7-13.35-10.7-9.38,0-17,12.51-17,28s7.6,28,17,28,17-12.52,17-28a44.89,44.89,0,0,0-.74-8.17Z"
              stroke="currentColor"
              fill={svgColors.strokeColor}
              strokeMiterlimit="10"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default InteractiveFace;
