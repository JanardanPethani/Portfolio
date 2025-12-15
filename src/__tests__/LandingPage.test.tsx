import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "./helpers/test-utils";
import {
  setupMatchMedia,
  setupDocumentGetElementById,
} from "./helpers/test-utils";
import Home from "../app/page";
import React from "react";

// We're not mocking child components, but we still need to mock certain browser APIs and libraries

// Mock next-themes since it requires browser APIs not available in jsdom
vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "light",
    theme: "light",
    setTheme: vi.fn(),
  }),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => {
  const actualFramerMotion = vi.importActual("framer-motion");
  return {
    ...actualFramerMotion,
    motion: {
      div: ({
        children,
        className,
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
      }) => (
        <div className={className} {...props}>
          {children}
        </div>
      ),
      h1: ({
        children,
        className,
        ...props
      }: {
        children?: React.ReactNode;
        className?: string;
        [key: string]: unknown;
      }) => (
        <h1 className={className} {...props}>
          {children}
        </h1>
      ),
    },
  };
});

// Mock window.matchMedia and document.getElementById which are required for the components
describe("Home Page", () => {
  beforeEach(() => {
    setupMatchMedia();
    setupDocumentGetElementById();
    vi.clearAllMocks();

    // Mock Rive animations since they're not available in jsdom
    vi.mock("@rive-app/react-canvas", () => ({
      useRive: () => ({
        rive: { play: vi.fn(), canvas: document.createElement("canvas") },
        RiveComponent: ({ className }: { className: string }) => (
          <div className={className} data-testid="rive-component">
            Rive Animation
          </div>
        ),
      }),
      useStateMachineInput: () => ({ value: false }),
      Alignment: { Center: "center" },
      Fit: { FitWidth: "fit-width" },
      Layout: class Layout {
        constructor() {
          return {};
        }
      },
    }));

    // Mock GSAP since it's not available in jsdom
    vi.mock("gsap", () => ({
      default: {
        to: vi.fn(),
        ticker: {
          add: vi.fn(),
          remove: vi.fn(),
        },
      },
    }));

    vi.mock("@gsap/react", () => ({
      useGSAP: (callback: () => void) => {
        callback();
        return {};
      },
    }));
  });

  it("renders the Home component with LandingHero", () => {
    render(<Home />);

    // Check if LandingHero main container is rendered
    const heroElements = screen.queryAllByTestId("landing-hero-main");
    expect(heroElements.length).toBeGreaterThan(0);
  });

  it("renders the name and role correctly", () => {
    render(<Home />);

    const nameElement = screen.queryAllByTestId("landing-hero-name")[0];
    const roleElement = screen.queryAllByTestId("landing-hero-role")[0];

    expect(nameElement.textContent).toBe("Janardan Pethani");
    expect(roleElement.textContent?.trim()).toBe("Full Stack Developer.");
  });

  it("renders social links correctly", () => {
    render(<Home />);

    const githubLinks = screen.queryAllByTestId("github-link");
    const linkedinLinks = screen.queryAllByTestId("linkedin-link");

    expect(githubLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks.length).toBeGreaterThan(0);

    const githubLink = githubLinks[0];
    const linkedinLink = linkedinLinks[0];

    expect(githubLink.getAttribute("href")).toBe(
      "https://github.com/JanardanPethani"
    );
    expect(linkedinLink.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/janardan-pethani/"
    );
  });

  it("has the correct structure with left and right sections", () => {
    render(<Home />);

    const leftSections = screen.queryAllByTestId("landing-hero-left");
    const rightSections = screen.queryAllByTestId("landing-hero-right");

    expect(leftSections.length).toBeGreaterThan(0);
    expect(rightSections.length).toBeGreaterThan(0);
  });

  it("handles click events correctly", () => {
    const scrollIntoViewMock = vi.fn();
    document.getElementById = vi.fn().mockImplementation((id) => {
      if (id === "experience") {
        return { scrollIntoView: scrollIntoViewMock };
      }
      return null;
    });

    render(<Home />);

    const mainElements = screen.queryAllByTestId("landing-hero-main");
    fireEvent.click(mainElements[0]);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    // Clicking on links should not trigger scrollIntoView
    scrollIntoViewMock.mockClear();
    const githubLinks = screen.queryAllByTestId("github-link");
    fireEvent.click(githubLinks[0]);
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
