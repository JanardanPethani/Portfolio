"use client";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function TextHighlight({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const { rive, RiveComponent } = useRive({
    src: "highlight_animation.riv",
    stateMachines: "RootMachine",
    autoplay: false,
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
  });

  const isRendered = useStateMachineInput(rive, "RootMachine", "isRendered");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isRendered) {
      // eslint-disable-next-line
      (isRendered as any).value = true;

      timeout = setTimeout(() => {
        rive?.play();
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isRendered, rive]);

  useEffect(() => {
    if (!rive) return;
    if (resolvedTheme === "dark") {
      // @ts-expect-error - Rive canvas is not typed
      const canvas = rive.canvas as HTMLCanvasElement;
      // eslint-disable-next-line
      canvas.style.filter = "invert(1)";
    } else {
      // @ts-expect-error - Rive canvas is not typed
      const canvas = rive.canvas as HTMLCanvasElement;
      canvas.style.filter = "none";
    }
  }, [resolvedTheme, rive]);

  return (
    <span className="relative inline-block">
      {children}

      <div className="absolute top-0 left-0 -z-10 overflow-visible w-full h-full scale-[0.4] sm:scale-[0.5] md:scale-[0.9] translate-x-[-20%] md:translate-x-[-20%] lg:translate-x-[-10%]">
        <div className="relative w-[528px] h-[142px]">
          <RiveComponent className="w-full h-full opacity-15" />
        </div>
      </div>
    </span>
  );
}
