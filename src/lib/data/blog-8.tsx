import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSection";
import ImageSection from "@/components/Blog/ImageSection";

export const blog = {
  slug: "jest-testing-es-modules",
  title: "Solving Jest Testing Challenges with ES Modules",
  publishDate: "2025-06-18",
  categories: ["Testing", "JavaScript", "React"],
  excerpt:
    "How to fix the 'SyntaxError: Cannot use import statement outside a module' error when testing ES module libraries with Jest.",
  thumbnail: "/images/blog/default-thumbnail.jpg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <ImageSection
          src="/images/blog/default-thumbnail.jpg"
          alt="Blog post illustration"
          width={1200}
          height={630}
        />

        <TitleSection>
          Solving Jest Testing Challenges with ES Modules
        </TitleSection>
        <DetailSection>
          When working with modern JavaScript libraries that use ES modules, you
          might encounter testing issues, especially when integrating them into
          Create React App projects. One common error is{" "}
          <code>SyntaxError: Cannot use import statement outside a module</code>
          . Here&apos;s how I solved this frustrating problem.
        </DetailSection>

        <TitleSection>The Problem</TitleSection>
        <DetailSection>
          I recently built a component library using Vite, which outputs ES
          modules by default. When I tried to use this library in a Create React
          App project that uses Jest for testing, I encountered a roadblock.
          Jest couldn&apos;t process the ES module imports from my component
          library, resulting in the dreaded error:
        </DetailSection>

        <CodeSection
          language="bash"
          code={`SyntaxError: Cannot use import statement outside a module`}
        />

        <DetailSection>
          This happens because Jest, by default, uses Node&apos;s CommonJS
          module system, while my component library was using ES modules. The
          two systems have different import/export syntax, causing the conflict.
        </DetailSection>

        <TitleSection>The Solution</TitleSection>
        <DetailSection>
          After much research and experimentation, I found a working solution
          that involves two key parts:
        </DetailSection>

        <TitleSection>1. Configure Jest to Transform Node Modules</TitleSection>
        <DetailSection>
          By default, Jest ignores transformations for files in{" "}
          <code>node_modules</code>. We need to tell Jest to transform our
          component library files specifically:
        </DetailSection>

        <CodeSection
          language="javascript"
          code={`// jest.config.js 
module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [...],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  coverageReporters: ["json", "html", "text-summary"],
  transform: {
    "^.+\\\\.(ts|tsx)$": "ts-jest",
    "^.+\\\\.(js|jsx)$": "babel-jest", // Important
    "^.+\\\\.svg$": "<rootDir>/svgTransform.js",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(my-component-lib)/)"], // Important
  moduleDirectories: ["node_modules", "src"]
`}
        />

        <DetailSection>The crucial parts here are:</DetailSection>
        <DetailSection>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Adding <code>babel-jest</code> to transform JavaScript files
            </li>
            <li>
              Setting <code>transformIgnorePatterns</code> to exclude your
              component library from the ignored modules
            </li>
          </ul>
        </DetailSection>

        <TitleSection>2. Configure Babel</TitleSection>
        <DetailSection>
          Next, we need to set up Babel to properly transform our ES modules:
        </DetailSection>

        <CodeSection
          language="javascript"
          code={`// .babelrc
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
};`}
        />

        <DetailSection>
          Don&apos;t forget to install the necessary dependencies:
        </DetailSection>

        <CodeSection
          language="bash"
          code={`npm install --save-dev @babel/preset-env @babel/preset-typescript @babel/preset-react`}
        />

        <TitleSection>Running Tests</TitleSection>
        <DetailSection>
          Finally, I added a script to my package.json to run the tests with the
          custom configuration:
        </DetailSection>

        <CodeSection
          language="json"
          code={`"jest": "jest --config jest.config.js --coverage"`}
        />

        <DetailSection>
          With these changes in place, Jest was able to properly transform my ES
          module component library, and the tests ran successfully.
        </DetailSection>

        <TitleSection>Why This Works</TitleSection>
        <DetailSection>The solution works because:</DetailSection>
        <DetailSection>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              We&apos;re telling Jest to transform our component library files
              with Babel instead of ignoring them
            </li>
            <li>
              Babel converts the ES modules to a format Jest can understand
            </li>
            <li>
              The specific Babel presets handle both TypeScript and React JSX
              syntax
            </li>
          </ol>
        </DetailSection>

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          Testing modern JavaScript libraries that use ES modules with Jest
          requires some configuration, but it&apos;s definitely possible. The
          key is to properly set up your transformation patterns and Babel
          configuration to handle the ES module syntax.
        </DetailSection>

        <DetailSection>
          This solution should work for most cases where you&apos;re testing
          applications that use ES module libraries with Jest. If you&apos;re
          working with Next.js, you might also consider using the{" "}
          <code>transpilePackages</code> option in your Next.js config.
        </DetailSection>
      </div>
    </div>
  ),
};
