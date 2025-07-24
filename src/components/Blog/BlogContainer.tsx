"use client";

import React from "react";
import SocialSidebar from "./SocialSidebar";

interface BlogContainerProps {
  children: React.ReactNode;
}

const BlogContainer = ({ children }: BlogContainerProps) => {
  return (
    <div className="relative mx-auto max-w-4xl md:max-w-5xl mt-2 md:mt-4 lg:mt-6 min-h-[calc(100dvh-80px)] px-2 md:px-4">
      {/* Main content container */}
      <div className="relative md:p-6 lg:p-8">
        <div className="relative z-10">{children}</div>
      </div>

      <SocialSidebar />
    </div>
  );
};

export default BlogContainer;
