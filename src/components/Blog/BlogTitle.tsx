import React from "react";

interface BlogTitleProps {
  title: string;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return (
    <div className="text-center px-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
        {title}
      </h1>

      {/* Decorative underline */}
      <div className="mt-4 md:mt-6 flex justify-center">
        <div className="w-16 md:w-24 h-0.5 md:h-1 bg-blue-500 rounded-full" />
      </div>
    </div>
  );
};

export default BlogTitle;
