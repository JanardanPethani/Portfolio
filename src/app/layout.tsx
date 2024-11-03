import type { Metadata } from "next";
import { Inter as FontSans, Akshar as FontAkshar } from "next/font/google";

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
  description: "A fullstack developer.",
  keywords: [
    "Full Stack developer",
    "ReactJs",
    "NextJs",
    "AWS",
    "NodeJS",
    "Software Developer",
  ],
  openGraph: {
    title: "Janardan Pethani",
    description: "A fullstack developer.",
    url: "https://janardanpethani.in",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/diqi8yegg/image/upload/v1724481024/home_profile_jboj56.jpg",
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
      <head />
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
          <main className="container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
