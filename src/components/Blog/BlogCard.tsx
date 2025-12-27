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
    thumbnail?: string;
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
      <Card className="group relative overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
        <CardContent className="p-4 md:p-6 flex flex-col h-full relative z-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
            {blog.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="bg-primary/10 text-primary px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-semibold border border-primary/20"
              >
                {category}
              </span>
            ))}
            {blog.categories.length > 2 && (
              <span className="bg-muted text-muted-foreground px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-medium">
                +{blog.categories.length - 2}
              </span>
            )}
          </div>

          {/* Title */}
          <CardTitle className="text-lg md:text-xl font-bold text-card-foreground mb-2 md:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {blog.title}
          </CardTitle>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-muted-foreground mb-4 md:mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">
              {blog.excerpt}
            </p>
          )}

          {/* Meta information */}
          <div className="mt-auto space-y-2 md:space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
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
