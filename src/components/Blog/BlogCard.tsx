import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import LinkTransition from "../LinkTransition";
import { Calendar, Tag } from "lucide-react";

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
      <Card className="hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full flex flex-col">
        <CardContent className="p-4 flex flex-col h-full">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
            {blog.title}
          </CardTitle>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(blog.publishDate)}</span>
          </div>

          {blog.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-auto">
            <div className="flex items-center mb-2">
              <Tag className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Categories:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </LinkTransition>
  );
};

export default BlogCard;
