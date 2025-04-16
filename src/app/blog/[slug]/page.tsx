import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogLayout from "@/components/Blog/BlogLayout";
import BlogContainer from "@/components/Blog/BlogContainer";
import { blogData } from "@/lib/blog-data";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | My Blog`,
    description: blog.excerpt || `Read about ${blog.title}`,
    keywords: blog.categories.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.excerpt || `Read about ${blog.title}`,
      type: "article",
      publishedTime: blog.publishDate,
      authors: ["Janardan Pethani"],
      // url: `https://yourwebsite.com/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || `Read about ${blog.title}`,
    },
  };
}

export default function BlogPage({ params }: Props) {
  const blog = blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <BlogContainer>
      <BlogLayout
        title={blog.title}
        publishDate={blog.publishDate}
        categories={blog.categories}
        content={blog.content}
      />
    </BlogContainer>
  );
}
