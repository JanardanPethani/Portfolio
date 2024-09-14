import Link from "next/link";

import InteractiveFace from "@/components/InteractiveFace";
import Name3D from "@/components/Name/Name";

export default function Home() {
  return (
    <>
      <div className="relative max-h-screen z-10">
        <Name3D />
        <p className="text-center text-xl">A Fullstack developer.</p>
        <div className="mt-20">
          <InteractiveFace />

          {/* Navigation to Experience */}
          <div className="mt-11 flex justify-center">
            <Link
              href="/experience"
              className="group rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center">
                To Experience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
