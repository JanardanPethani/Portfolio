"use client";
import { motion } from "framer-motion";
import InteractiveFace from "@/components/InteractiveFace";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import styles from "./LandingHero.module.css";
import CursorFollow from "./CursorFollow";

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
  },
};
const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
  },
};
const textVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function LandingHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shineOnce, setShineOnce] = useState(false);
  const shineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
    setShineOnce(true);
  }, []);

  useEffect(() => {
    if (!shineOnce || !shineRef.current) return;
    const node = shineRef.current as HTMLSpanElement;
    const handleAnimationEnd = () => setShineOnce(false);
    node.addEventListener("animationend", handleAnimationEnd);
    return () => node.removeEventListener("animationend", handleAnimationEnd);
  }, [shineOnce]);

  // Handler to scroll/navigate to experience on main click (excluding the floating rectangle)
  const handleMainClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    // Prevent if clicking the floating rectangle
    if (target.closest(".cursor-follow-rect")) return;
    // Prevent if clicking a link, button, or element with role="button" or role="link"
    if (target.closest('a,button,[role="button"],[role="link"]')) return;
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/experience";
    }
  };

  // Only render after mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <CursorFollow />
      <main
        className="flex flex-col md:flex-row items-center justify-center px-4 md:px-0 overflow-x-hidden"
        style={{ minHeight: "calc(100vh - 50px)" }}
        onClick={handleMainClick}
      >
        {/* Left Side: Interactive SVG */}
        <motion.div
          className="flex-1 flex justify-center items-center h-[40vh] md:h-[70vh] w-full md:w-auto mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
        >
          <InteractiveFace className="h-[40vh] md:h-[70vh] w-auto max-w-[95vw] md:max-w-[90%] drop-shadow-xl" />
        </motion.div>
        {/* Right Side: Text and Socials */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start md:pl-12 md:pr-6 w-full md:w-auto"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 text-left w-full break-words"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span
              ref={shineRef}
              className={`${styles.heroUnderline} ${
                shineOnce ? styles.shineOnce : ""
              } relative inline-block cursor-pointer transition-colors duration-300`}
              style={{
                WebkitTextStroke:
                  resolvedTheme === "dark" ? "1px #fff" : "1px #222",
                wordBreak: "break-word",
              }}
            >
              Janardan Pethani
            </span>
            <br />
            <span className="text-primary text-base sm:text-lg md:text-xl font-medium opacity-70 mt-2 block">
              Full Stack Developer.
            </span>
          </motion.h1>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/JanardanPethani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/janardan-pethani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
