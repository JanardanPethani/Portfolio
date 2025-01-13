import React from "react";
import SocialSidebar from "./SocialSidebar";

interface BlogContainerProps {
  children: React.ReactNode;
}

const BlogContainer = ({ children }: BlogContainerProps) => {
  return (
    <div className="relative mx-auto max-w-4xl mt-2 md:mt-3 h-[calc(100dvh-65px)] border rounded-lg border-gray-200">
      <div className="h-full overflow-y-auto rounded-lg shadow-lg bg-white dark:bg-gray-900 p-3 md:p-5">
        {children}
      </div>
      <SocialSidebar />
    </div>
  );
};

export default BlogContainer;
