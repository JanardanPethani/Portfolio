import { vi } from "vitest";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";

// Setup window.matchMedia mock
export function setupMatchMedia() {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

// Setup document.getElementById mock for experience section
export function setupDocumentGetElementById() {
  const scrollIntoViewMock = vi.fn();
  document.getElementById = vi.fn().mockImplementation((id) => {
    if (id === "experience") {
      return {
        scrollIntoView: scrollIntoViewMock,
      };
    }
    return null;
  });
  return scrollIntoViewMock;
}

// Custom render with providers if needed
export function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, {
    ...options,
  });
}

// Re-export everything from testing-library
export * from "@testing-library/react";
