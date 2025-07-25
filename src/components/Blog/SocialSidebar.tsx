"use client";

import React from "react";
import { Share2, Twitter, Facebook, Linkedin, Link } from "lucide-react";

const SocialSidebar: React.FC = () => {
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = document.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    };

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        console.log("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    } else if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(
        shareUrls[platform as keyof typeof shareUrls],
        "_blank",
        "width=600,height=400"
      );
    }
  };

  return (
    <div className="fixed right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl shadow-gray-500/10 dark:shadow-gray-900/50">
        <div className="flex flex-col space-y-2 md:space-y-3">
          {/* Share button */}
          <button
            onClick={() => handleShare("copy")}
            className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg md:rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
            title="Copy link"
          >
            <Link className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Social media buttons */}
          <button
            onClick={() => handleShare("twitter")}
            className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            title="Share on Twitter"
          >
            <Twitter className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <button
            onClick={() => handleShare("facebook")}
            className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            title="Share on Facebook"
          >
            <Facebook className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <button
            onClick={() => handleShare("linkedin")}
            className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            title="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
