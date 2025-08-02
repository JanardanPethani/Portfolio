"use client";
import { motion } from "framer-motion";
import InteractiveFace from "@/components/InteractiveFace";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import styles from "./LandingHero.module.css";
import CursorFollow from "./CursorFollow";
import TextHighlight from "./TextHighlight";

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
        className="flex flex-col md:flex-row items-center justify-center px-4 md:px-0 overflow-x-hidden py-8"
        style={{ minHeight: "calc(100vh - 50px)" }}
        onClick={handleMainClick}
        data-testid="landing-hero-main"
      >
        {/* Left Side: Interactive SVG */}
        <motion.div
          className="flex-1 flex justify-center items-center min-h-[40vh] w-full md:h-[70vh] md:w-auto md:mb-0"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
          data-testid="landing-hero-left"
        >
          <InteractiveFace className="h-[40vh] md:h-[70vh] w-auto max-w-[95vw] md:max-w-[90%] drop-shadow-xl" />
        </motion.div>
        {/* Right Side: Text and Socials */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start md:pl-12 md:pr-6 w-full md:w-auto"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
          data-testid="landing-hero-right"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 w-full break-words text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            data-testid="landing-hero-title"
          >
            <TextHighlight>
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
                data-testid="landing-hero-name"
              >
                Janardan Pethani
              </span>
              <br />
              <span
                className="text-primary text-2xl font-medium mt-3 block text-shadow-[1px 1px 2px pink]"
                data-testid="landing-hero-role"
              >
                Full Stack Developer.
              </span>
            </TextHighlight>
          </motion.h1>
          <div className="flex gap-4 mt-6" data-testid="landing-hero-socials">
            <a
              href="https://github.com/JanardanPethani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
              data-testid="github-link"
            >
              <Github className="w-7 md:w-8 h-7 md:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/janardan-pethani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
              data-testid="linkedin-link"
            >
              <Linkedin className="w-7 md:w-8 h-7 md:h-8" />
            </a>
          </div>
        </motion.div>
      </main>
    </>
  );
}
