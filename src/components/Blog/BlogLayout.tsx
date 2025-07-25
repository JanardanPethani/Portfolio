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
        <div className="flex flex-wrap items-center justify-between gap-3 mt-3 md:mt-4 p-3 md:p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-wrap items-center gap-3">
            <PublishDate date={publishDate} />
            <div className="hidden md:block w-px h-5 bg-gray-300 dark:bg-gray-600" />
            <Categories categories={categories} />
          </div>

          {/* Reading time estimate */}
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium">
            ~{formatReadingTime(readingTime)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <BlogContent content={content} />
      </div>
    </article>
  );
};

export default BlogLayout;
