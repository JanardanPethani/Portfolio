import React from "react";
import { Check } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              isSelected
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {isSelected && <Check className="h-3 w-3 md:h-4 md:w-4" />}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
