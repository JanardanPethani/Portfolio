import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter by Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories.map((category) => (
          <DropdownMenuItem key={category} asChild>
            <label className="flex items-center space-x-2">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onChange(category)}
              />
              <span>{category}</span>
            </label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
