import TitleSection from "@/components/Blog/TitleSection";
import ImageSection from "@/components/Blog/ImageSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";

export const blog = {
  slug: "publish-react-npm-vite",
  title: "How to Publish a React Component as an npm Package Using Vite",
  publishDate: "2025-05-29",
  categories: ["React", "Vite", "Library", "npm"],
  excerpt:
    "A step-by-step guide to publishing your own React component as a npm package, starting from a Vite app. Real-world example: @janardanpethani/genmoji.",
  thumbnail: "/images/blog/default-thumbnail.jpg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          {`Have you ever built a cool React component and wanted to share it with the world? In this guide, I'll show you how I published `}
          <a
            href="https://www.npmjs.com/package/@janardanpethani/genmoji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            @janardanpethani/genmoji
          </a>
          {` — a mood-based emoji generator — as an npm package, starting from a Vite React app.`}
        </DetailSection>

        <TitleSection>
          Why Use a <code>lib</code> Directory for Components?
        </TitleSection>
        <DetailSection>
          Organizing your reusable code in a <code>lib/</code> directory keeps
          your published package clean and focused. It separates library code
          from demo or app code, makes exports easier to manage, and follows
          best practices used by many open source libraries.
        </DetailSection>

        <TitleSection>1. Create a Vite React App</TitleSection>
        <CodeSection
          language="bash"
          code={`npm create vite@latest <your library name> -- --template react-ts`}
        />
        <CodeSection language="bash" code={`cd <your library name>`} />
        <CodeSection language="bash" code={`npm install`} />

        <TitleSection>2. Develop Your Component</TitleSection>
        <DetailSection>
          {`Write your component as you would in any React app. For example, in lib/components/Chat.tsx:`}
        </DetailSection>
        <CodeSection
          language="tsx"
          code={`import React from "react";

type ChatProps = {
  // Add any props you want to support
};

export const Chat: React.FC<ChatProps> = (props) => {
  return <button>Open Genmoji Chat</button>;
};`}
        />
        <DetailSection>
          {`Create index.ts in lib/components and export everything from it:`}
        </DetailSection>
        <CodeSection language="ts" code={`export * from "./Chat";`} />
        <DetailSection>
          {`Create index.ts in lib and export everything from it:`}
        </DetailSection>
        <CodeSection language="ts" code={`export * from "./components";`} />

        <TitleSection>3. Configure Vite for Library Build</TitleSection>
        <CodeSection
          language="ts"
          code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  // Configure plugins for Vite
  plugins: [
    // React plugin for Vite
    react(),
    // Plugin to generate TypeScript declaration files (d.ts)
    dts({
      // Specify the path to the build-specific tsconfig file
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  // Build configuration options
  build: {
    // Library build options
    lib: {
      // Entry point for the library build
      entry: "lib/index.ts",
      // Function to determine the output file name based on the format
      fileName: (format) => \`genmoji.\${format}.js\`,
      // Output formats for the library
      formats: ["es", "cjs"],
    },
    // Rollup specific options (used under the hood by Vite)
    rollupOptions: {
      // Specify dependencies that should not be bundled into the library
      external: ["react", "react-dom"],
      // Output options for Rollup
      output: {
        // Configure global variables for external dependencies
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // Empty the output directory before building
    emptyOutDir: true,
    // Do not copy the public directory to the output directory
    copyPublicDir: false,
    // Minify the output code
    minify: true,
  },
})`}
        />
        <DetailSection>
          {`You need to install vite-plugin-dts to generate TypeScript declaration files.`}
        </DetailSection>
        <CodeSection language="bash" code={`npm install vite-plugin-dts`} />

        <TitleSection>4. Update package.json</TitleSection>
        <CodeSection
          language="json"
          code={`{
  ...
  "type": "module",
  "main": "dist/genmoji.cjs.js",
  "module": "dist/genmoji.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/genmoji.es.js",
      "require": "./dist/genmoji.cjs.js"
    }
  },
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  ...
  "dependencies": {
    "framer-motion": "^12.15.0"
  },
  "peerDependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  ...
}`}
        />

        <TitleSection>
          Why These <code>package.json</code> Fields?
        </TitleSection>
        <DetailSection>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="py-2 px-4 text-left">Field</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>main/module/types</strong>
                </td>
                <td className="py-2 px-4">
                  Ensures compatibility with all bundlers and editors.
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>exports</strong>
                </td>
                <td className="py-2 px-4">
                  Modern way to define entry points for different environments.
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>files</strong>
                </td>
                <td className="py-2 px-4">
                  Only publish what&apos;s needed (keeps npm package small and
                  clean).
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>peerDependencies</strong>
                </td>
                <td className="py-2 px-4">
                  Prevents multiple React versions in the consumers app.
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>publishConfig</strong>
                </td>
                <td className="py-2 px-4">
                  This setting is specifically relevant for scoped packages
                  (packages whose names start with <code>@scope/</code>, like
                  yours: <code>@janardanpethani/genmoji</code>). By default,
                  scoped packages are published as private. Setting{" "}
                  <code>&quot;access&quot;: &quot;public&quot;</code> ensures
                  your package is published publicly, making it available for
                  anyone to install from the npm registry.
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <strong>scripts.build</strong>
                </td>
                <td className="py-2 px-4">
                  Runs both TypeScript and Vite build for a complete output.
                </td>
              </tr>
            </tbody>
          </table>
          For more, see{" "}
          <a
            href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            npm package.json docs
          </a>
          .
        </DetailSection>

        <TitleSection>5. Build Your Package</TitleSection>
        <CodeSection language="bash" code={`npm run build`} />
        <DetailSection>
          {`This will output your library to the dist/ folder.`}
        </DetailSection>

        <TitleSection>6. Publish to npm</TitleSection>
        <CodeSection language="bash" code={`npm login`} />
        <CodeSection language="bash" code={`npm publish --access public`} />

        <TitleSection>7. Usage Example</TitleSection>
        <CodeSection
          language="tsx"
          code={`
import { Chat } from "@janardanpethani/genmoji";
function App() {
  return <Chat />;
}`}
        />

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          {`Vite makes it easy to go from a React app to a reusable npm package. You can see the full source and real-world example here: `}
          <a
            href="https://github.com/JanardanPethani/genmoji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            github.com/JanardanPethani/genmoji
          </a>
        </DetailSection>

        <TitleSection>References</TitleSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4">
            <li>
              <a
                href="https://www.npmjs.com/package/@janardanpethani/genmoji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                @janardanpethani/genmoji on npm
              </a>
            </li>
            <li>
              <a
                href="https://vitejs.dev/guide/build.html#library-mode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Vite Library Mode Docs
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                How to Create and Publish an NPM Package (freeCodeCamp)
              </a>
            </li>
          </ul>
        </DetailSection>
      </div>
    </div>
  ),
};
