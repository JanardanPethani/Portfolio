import React from "react";
import BlogTitle from "./BlogTitle";
import PublishDate from "./PublishDate";
import Categories from "./Categories";
import BlogContent from "./BlogContent";
import { calculateReadingTime, formatReadingTime } from "@/lib/utils";

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
  const readingTime = calculateReadingTime(content);

  return (
    <article className="text-gray-900 dark:text-gray-100 pb-6 md:pb-10">
      {/* Hero section */}
      <div className="mb-8 md:mb-12">
        <BlogTitle title={title} />

        {/* Meta information */}
        <div className="flex flex-col gap-2 items-start md:items-center md:justify-between mt-4 md:mt-6 p-2 md:p-4">
          <div className="flex items-center gap-2 w-full justify-between">
            <PublishDate date={publishDate} />

            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 w-max">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-medium text-sm w-max">
                ~{formatReadingTime(readingTime)}
              </span>
            </div>
          </div>

          <Categories categories={categories} />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <BlogContent content={content} />
      </div>
    </article>
  );
};

export default BlogLayout;
