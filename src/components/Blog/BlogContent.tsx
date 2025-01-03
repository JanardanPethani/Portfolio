import React from "react";

interface BlogContentProps {
  content: React.ReactNode;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return <div className="prose dark:prose-dark max-w-none">{content}</div>;
};

export default BlogContent;
