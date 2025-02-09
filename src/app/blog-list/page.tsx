"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { blogData } from "@/lib/blog-data";
import BlogCard from "@/components/Blog/BlogCard";
import { Input } from "@/components/ui/input";
import CategoryFilter from "@/components/Blog/CategoryFilter";

const BlogList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const selectedCategories = searchParams.get("categories")?.split(",") || [];

  const [categories, setCategories] = useState<string[]>(selectedCategories);

  const allCategories = Array.from(new Set(blogData.flatMap((blog) => blog.categories)));

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categories.length === 0 || categories.some((category) => blog.categories.includes(category)))
  );
  console.log("🚀 ~ BlogList ~ filteredBlogs:", blogData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", search);
    params.set("categories", categories.join(","));
    router.push(`/blog-list?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = categories.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];
    setCategories(newCategories);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", searchTerm);
    params.set("categories", newCategories.join(","));
    router.push(`/blog-list?${params.toString()}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="flex items-center space-x-4 mb-8">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1"
        />
        <CategoryFilter categories={allCategories} selectedCategories={categories} onChange={handleCategoryChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
