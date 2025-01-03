import TextSection from "@/components/Blog/TextSection";
import CodeSection from "@/components/Blog/CodeSection";
import ImageSection from "@/components/Blog/ImageSection";
import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import VideoSection from "@/components/Blog/VideoSection";

export const blogData = [
  {
    slug: "nextjs-features",
    title: "Exploring Next.js Features [For Demo Purpose]",
    publishDate: "2023-10-15",
    categories: ["Next.js", "JavaScript", "Web Development"],
    content: (
      <div>
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          Next.js is a powerful React framework that enables developers to build
          fast and user-friendly web applications. In this blog post, we will
          explore some of the key features of Next.js.
        </DetailSection>
        <TitleSection>File-based Routing</TitleSection>
        <DetailSection>
          Next.js uses a file-based routing system, which means that the
          structure of your files and folders determines the routes of your
          application. This makes it easy to create and manage routes.
        </DetailSection>
        <CodeSection
          language="javascript"
          code={`// pages/index.js
export default function Home() {
  return <h1>Home Page</h1>;
}

// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}`}
        />
        <TitleSection>Server-side Rendering (SSR)</TitleSection>
        <DetailSection>
          Next.js supports server-side rendering out of the box. This means that
          you can render your React components on the server and send the HTML
          to the client, resulting in faster load times and better SEO.
        </DetailSection>
        <CodeSection
          language="javascript"
          code={`// pages/index.js
export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}`}
        />
        <TitleSection>Image Optimization</TitleSection>
        <DetailSection>
          Next.js provides built-in image optimization, which automatically
          optimizes images for faster load times. This feature includes support
          for modern image formats like WebP.
        </DetailSection>
        <TitleSection>Video Reference</TitleSection>
        <DetailSection>
          Here is a video reference to learn more about Next.js features.
        </DetailSection>
        <VideoSection
          src="https://www.youtube.com/embed/1WmNXEVia8I"
          title="Next.js Crash Course"
        />
        <DetailSection>Credits: Traversy Media</DetailSection>
        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          Next.js offers a wide range of features that make it a great choice
          for building modern web applications. Whether you need server-side
          rendering, static site generation, or API routes, Next.js has you
          covered.
        </DetailSection>
      </div>
    ),
  },
  // Add more blog posts here
];
