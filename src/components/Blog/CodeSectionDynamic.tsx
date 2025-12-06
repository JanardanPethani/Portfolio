"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipPortal } from "@radix-ui/react-tooltip";

interface CodeSectionProps {
  language: string;
  code: string;
}

const CodeSectionDynamic: React.FC<CodeSectionProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 md:my-8 relative group">
      {/* Language badge */}
      <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
        <span className="bg-muted text-muted-foreground px-2 md:px-3 py-1 rounded-full text-xs font-medium">
          {language}
        </span>
      </div>

      {/* Copy button */}
      <Tooltip open={copied}>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="absolute top-3 md:top-4 right-3 md:right-4 z-10 p-1.5 md:p-2 bg-muted/80 hover:bg-muted text-foreground rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            title="Copy code"
          >
            {copied ? (
              <Check className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
            ) : (
              <Copy className="h-3 w-3 md:h-4 md:w-4" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <p>Copied to clipboard!</p>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>

      {/* Code block */}
      <div className="relative rounded-lg md:rounded-xl overflow-hidden border border-border shadow-lg">
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={isDark ? oneDark : oneLight}
            customStyle={{
              margin: 0,
              padding: "2.5rem 1rem 1rem",
              fontSize: "0.75rem",
              lineHeight: "1.5",
              background: "transparent",
              minWidth: "100%",
            }}
            showLineNumbers={true}
            lineNumberStyle={{
              color: isDark ? "#6b7280" : "#9ca3af",
              fontSize: "0.7rem",
              marginRight: "0.75rem",
              minWidth: "2rem",
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeSectionDynamic;
