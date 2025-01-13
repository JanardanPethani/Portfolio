import React from "react";

interface BlogTitleProps {
  title: string;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center py-4 md:py-8">
      {title}
    </h1>
  );
};

export default BlogTitle;
