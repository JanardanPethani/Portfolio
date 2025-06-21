"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="w-fit px-2 md:px-0 md:py-2 flex justify-center md:gap-2 absolute bottom-1 backdrop-blur-sm border border-white/20 rounded-full items-center md:w-auto md:flex-col md:-right-12 md:bottom-1/3">
      <a
        href="https://github.com/JanardanPethani"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-colors duration-200 text-muted-foreground hover:text-foreground"
      >
        <Github className="w-6 h-6" />
      </a>

      <a
        href="https://www.linkedin.com/in/janardan-pethani/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-colors duration-200 text-muted-foreground hover:text-foreground"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a
        href="https://x.com/417cc73c4a4a415"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-colors duration-200 text-muted-foreground hover:text-foreground"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
        >
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jpethani11@gmail.com"
        target="_blank"
        className="p-2 rounded-full transition-colors duration-200 text-muted-foreground hover:text-foreground"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialSidebar;
