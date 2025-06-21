"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeSectionProps {
  language: string;
  code: string;
}

const CodeSection: React.FC<CodeSectionProps> = ({ language, code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="relative mb-4 shadow-md overflow-hidden">
      <Button
        onClick={copyToClipboard}
        className="absolute top-4 right-2 p-2 rounded shadow-md hover:bg-gray-700 text-white dark:text-black"
        aria-label="Copy to clipboard"
      >
        <Clipboard className="h-5 w-5" />
      </Button>
      <SyntaxHighlighter language={language} style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSection;
