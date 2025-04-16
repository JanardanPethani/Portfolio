"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import BlogLayout from "@/components/Blog/BlogLayout";
import BlogContainer from "@/components/Blog/BlogContainer";
import { blogData } from "@/lib/blog-data";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogData.find(post => post.slug === slug);
  if (!blog) return <div>Blog not found.</div>;

  return (
    <>
      <Head>
        <title>{blog.title} | My Blog</title>
        <meta name="description" content={`Read about ${blog.title}`} />
        <meta name="keywords" content={blog.categories.join(", ")} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={`Read about ${blog.title}`} />
        <meta property="og:type" content="article" />
        {/* <meta
          property="og:url"
          content={`https://yourwebsite.com/blog/${blog.slug}`}
        /> */}
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={`Read about ${blog.title}`} />
      </Head>
      <BlogContainer>
        <BlogLayout
          title={blog.title}
          publishDate={blog.publishDate}
          categories={blog.categories}
          content={blog.content}
        />
      </BlogContainer>
    </>
  );
};

export default BlogPage;
