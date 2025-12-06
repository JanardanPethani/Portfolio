"use client"

import React, { useEffect, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
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
  // number of visible items before collapsing into "More"
  const DEFAULT_VISIBLE = 6;
  const MOBILE_VISIBLE = 3;

  const [maxVisible, setMaxVisible] = useState<number>(DEFAULT_VISIBLE);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 767px)");
    const update = () => setMaxVisible(m.matches ? MOBILE_VISIBLE : DEFAULT_VISIBLE);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  const visible = categories.slice(0, maxVisible);
  const overflow = categories.slice(maxVisible);

  return (
    <div className="flex flex-wrap items-center gap-1 md:gap-2">
      <div className="flex items-center mr-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-md bg-muted text-muted-foreground">
          Selected: {selectedCategories.length}
        </span>
      </div>
      {visible.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-[12px] md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              isSelected
                ? "bg-primary text-primary-foreground border border-primary"
                : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
            }`}
          >
            {isSelected && <Check className="h-3 w-3" />}
            {category}
          </button>
        );
      })}

      {overflow.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-[12px] md:text-sm font-medium transition duration-150 bg-muted border border-border text-foreground">
              <span>More</span>
              <span className="text-xs text-muted-foreground">+{overflow.length}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <div className="max-h-40 overflow-y-auto">
              {overflow.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <DropdownMenuItem
                    key={category}
                    onSelect={() => onChange(category)}
                    className={isSelected ? "bg-primary text-primary-foreground" : ""}
                  >
                    {isSelected && <Check className="h-3 w-3 mr-2" />}
                    <span className="truncate">{category}</span>
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default CategoryFilter;
