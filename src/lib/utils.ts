import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate reading time based on text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 225 words per minute)
 * @returns Reading time in minutes (minimum 1 minute)
 */
export function calculateReadingTime(
  content: string | React.ReactNode,
  wordsPerMinute: number = 225
): number {
  if (!content) return 1;

  let textContent = "";

  // Handle React nodes by converting to string
  if (typeof content === "object") {
    textContent = JSON.stringify(content);
  } else {
    textContent = String(content);
  }

  // Clean the text by removing HTML tags and special characters
  const cleanText = textContent
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();

  // Count words
  const wordCount = cleanText
    .split(" ")
    .filter((word) => word.length > 0).length;

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Format reading time with appropriate text
 * @param minutes - Number of minutes
 * @returns Formatted reading time string
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 min read";
  }
  return `${minutes} min read`;
}
