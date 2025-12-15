import React from "react";

interface BlogContentProps {
  content: React.ReactNode;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content}
    </div>
  );
};

export default BlogContent;
