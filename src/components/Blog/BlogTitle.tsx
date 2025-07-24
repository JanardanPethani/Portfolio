import React from "react";

interface BlogTitleProps {
  title: string;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return (
    <div className="text-center px-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight tracking-tight">
        {title}
      </h1>

      {/* Decorative underline */}
      <div className="mt-4 md:mt-6 flex justify-center">
        <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
      </div>
    </div>
  );
};

export default BlogTitle;
