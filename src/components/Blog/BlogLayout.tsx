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
    <div className=" text-gray-900 dark:text-gray-100 pb-5">
      <BlogTitle title={title} />
      <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between mt-3">
        <PublishDate date={publishDate} />
        <Categories categories={categories} />
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      <BlogContent content={content} />
    </div>
  );
};

export default BlogLayout;
