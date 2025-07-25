import React from "react";
import { Tag } from "lucide-react";

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="flex items-start md:items-center space-x-2">
      <Tag className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 md:mt-0 flex-shrink-0" />
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default whitespace-nowrap"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
