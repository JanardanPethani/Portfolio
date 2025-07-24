import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import LinkTransition from "../LinkTransition";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    publishDate: string;
    categories: string[];
    excerpt?: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // Format the date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <LinkTransition href={`/blog/${blog.slug}`}>
      <Card className="group relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-xl md:rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 h-full flex flex-col backdrop-blur-sm">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-4 md:p-6 flex flex-col h-full relative z-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
            {blog.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-semibold border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
            {blog.categories.length > 2 && (
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-medium">
                +{blog.categories.length - 2}
              </span>
            )}
          </div>

          {/* Title */}
          <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {blog.title}
          </CardTitle>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">
              {blog.excerpt}
            </p>
          )}

          {/* Meta information */}
          <div className="mt-auto space-y-2 md:space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span>{formatDate(blog.publishDate)}</span>
                </div>
              </div>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 self-end md:self-auto group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </LinkTransition>
  );
};

export default BlogCard;
