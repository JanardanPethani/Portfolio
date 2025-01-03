import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    publishDate: string;
    categories: string[];
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className="hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <CardContent className="p-4">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {blog.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {blog.publishDate}
          </CardDescription>
          <div className="flex flex-wrap space-x-2 mt-2">
            {blog.categories.map((category) => (
              <span
                key={category}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
