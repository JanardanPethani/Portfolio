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
          "bg-background font-sans antialiased",
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
