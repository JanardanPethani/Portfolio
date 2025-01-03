"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import BlogLayout from "@/components/Blog/BlogLayout";
import { blogData } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={`Read about ${post.title}`} />
        <meta name="keywords" content={post.categories.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={`Read about ${post.title}`} />
        <meta property="og:type" content="article" />
        {/* <meta
          property="og:url"
          content={`https://yourwebsite.com/blog/${post.slug}`}
        /> */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={`Read about ${post.title}`} />
      </Head>
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
        <BlogLayout
          title={post.title}
          publishDate={post.publishDate}
          categories={post.categories}
          content={post.content}
        />
      </div>
    </>
  );
};

export default BlogPost;
