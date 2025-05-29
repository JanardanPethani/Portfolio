"use client";
import dynamic from "next/dynamic";

// This file exists to dynamically import the CodeSection component with SSR (Server-Side Rendering) disabled.
// This ensures that CodeSection is only rendered on the client side, which is useful for components that rely on browser-specific APIs or features.

const CodeSection = dynamic(() => import("./CodeSection"), { ssr: false });

export default CodeSection;
