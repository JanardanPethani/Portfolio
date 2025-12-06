"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { blogData } from "@/lib/blog-data";
import BlogCard from "@/components/Blog/BlogCard";
import { Input } from "@/components/ui/input";
import CategoryFilter from "@/components/Blog/CategoryFilter";
import { Search, Filter } from "lucide-react";

const BlogList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const rawCategories = searchParams.get("categories") || "";
  const selectedCategories = rawCategories
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const [categories, setCategories] = useState<string[]>(selectedCategories);

  const allCategories = Array.from(
    new Set(blogData.flatMap((blog) => blog.categories))
  );

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categories.length === 0 ||
        categories.some((category) => blog.categories.includes(category)))
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", search);
    if (categories.length > 0) {
      params.set("categories", categories.join(","));
    } else {
      params.delete("categories");
    }
    router.push(`/blog-list?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = categories.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];
    setCategories(newCategories);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchTerm);
    if (newCategories.length > 0) {
      params.set("categories", newCategories.join(","));
    } else {
      params.delete("categories");
    }
    router.push(`/blog-list?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 md:py-12 px-4">
        {/* Search and Filter Section */}
        <div className="mb-8 md:mb-12">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 md:p-6 shadow-lg">
            {/* Search */}
            <div className="mb-4 md:mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="space-y-3 z-10">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Filter by:
                </span>
              </div>
              <CategoryFilter
                categories={allCategories}
                selectedCategories={categories}
                onChange={handleCategoryChange}
              />
            </div>

            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredBlogs.length} article
                {filteredBlogs.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what
                you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  router.push("/blog-list");
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-300"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
