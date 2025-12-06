import React from "react";
import { Tag } from "lucide-react";

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="flex items-start md:items-center space-x-2 w-full">
      <Tag className="h-4 w-4 text-muted-foreground mt-0.5 md:mt-0 flex-shrink-0" />
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="bg-primary/10 text-primary px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300 cursor-default whitespace-nowrap"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
