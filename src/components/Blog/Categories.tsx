import React from "react";

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <span
          key={category}
          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default Categories;
