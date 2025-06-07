"use client";
import { useTheme } from "next-themes";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RECT_WIDTH = 110;
const RECT_HEIGHT = 40;

const CursorFollow: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  useGSAP(() => {
    // Add mouse move listener
    document.addEventListener("mousemove", handleMouseMove);

    // GSAP animation loop using ticker for better performance
    const animate = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: mousePos.current.x - 48,
          y: mousePos.current.y - 48,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    // Use GSAP's ticker for optimized animation loop
    gsap.ticker.add(animate);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(animate);
    };
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
      ref={followerRef}
      onClick={handleClick}
      style={{
        position: "fixed",
        top: "0",
        left: 0,
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
        zIndex: 50,
        pointerEvents: "auto",
        backdropFilter: "blur(8px)",
        userSelect: "none",
        mixBlendMode: "lighten",
        cursor: "pointer",
      }}
      className="cursor-follow-rect hidden md:flex select-none"
      title="Go to Experience"
    >
      To Experience
    </div>
  );
};

export default CursorFollow;
