import React from "react";
import BlogTitle from "./BlogTitle";
import PublishDate from "./PublishDate";
import Categories from "./Categories";
import BlogContent from "./BlogContent";

interface BlogLayoutProps {
  title: string;
  publishDate: string;
  categories: string[];
  content: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  publishDate,
  categories,
  content,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 md:p-10">
      <BlogTitle title={title} />
      <div className="flex items-center justify-between mt-4">
        <PublishDate date={publishDate} />
        <Categories categories={categories} />
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      <BlogContent content={content} />
    </div>
  );
};

export default BlogLayout;
