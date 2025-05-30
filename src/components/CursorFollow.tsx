"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";

const RECT_WIDTH = 110;
const RECT_HEIGHT = 40;

const CursorFollow: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/experience";
    }
  };

  return (
    <div
      ref={circleRef}
      onClick={handleClick}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: RECT_WIDTH,
        height: RECT_HEIGHT,
        borderRadius: "16px",
        background: "rgba(255,255,255,0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        color: resolvedTheme === "dark" ? "#fff" : "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        cursor: "pointer",
        zIndex: 50,
        pointerEvents: "auto",
        backdropFilter: "blur(8px)",
        transition: "background 0.2s",
        userSelect: "none",
        mixBlendMode: "lighten",
      }}
      className="cursor-follow-rect hidden md:flex select-none"
      title="Go to Experience"
    >
      To Experience
    </div>
  );
};

export default CursorFollow;
