import type { Metadata } from "next";
import { Inter as FontSans, Akshar as FontAkshar } from "next/font/google";
// import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontAkshar = FontAkshar({
  subsets: ["devanagari"],
  variable: "--font-akshar",
});

export const metadata: Metadata = {
  title: "Janardan Pethani",
  description:
    "I am a fullstack developer. Utilizing my skills to build scalable and efficient web applications. Passionate about Web and 2D/3D Animations.",
  keywords: [
    "Full Stack developer",
    "ReactJs",
    "NextJs",
    "AWS",
    "NodeJS",
    "Software Developer",
    "Web Developer",
    "2D/3D Animations",
    "Web Animations",
    "Web Development",
    "Web Design",
    "Web Development",
    "ExpressJs",
    "Surat Developer",
  ],
  openGraph: {
    title: "Janardan Pethani",
    description:
      "I am a fullstack developer. Utilizing my skills to build scalable and efficient web applications. Passionate about Web and 2D/3D Animations.",
    url: "https://janardanpethani.in",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/diqi8yegg/image/upload/Profile_nyn3fc.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans antialiased relative",
          fontSans.variable,
          fontAkshar.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main id="main" className="container">
            {children}
          </main>
        </ThemeProvider>
      </body>
      {/* <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}
      /> */}
    </html>
  );
}
