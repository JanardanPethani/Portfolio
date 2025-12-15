import TitleSection from "@/components/Blog/TitleSection";
import SubTitle from "@/components/Blog/SubTitle";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";
import ImageSection from "@/components/Blog/ImageSection";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "@/components/Blog/Table";

export const blog = {
  slug: "web-automation-with-llm",
  title: "Web Automation with LLM: A Comprehensive Guide",
  publishDate: "2025-12-06",
  categories: [
    "Web Automation",
    "LLM",
    "Browser Automation",
    "CDP",
    "Stagehand",
    "Testing",
  ],
  excerpt:
    "Explore the evolution of web automation, from traditional tools like Selenium and Playwright to modern AI-powered solutions like Stagehand. Learn about Chrome DevTools Protocol, browser automation frameworks, and how LLMs are revolutionizing web testing and automation.",
  thumbnail: "/images/blog/blog-9.jpg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <ImageSection
          src="/images/blog/blog-9.jpg"
          alt="Web Automation with LLM"
          width={1200}
          height={630}
        />

        <TitleSection>Why Browser Automation Matters Today?</TitleSection>
        <DetailSection>
          Web applications are no longer static pages; they are complex, dynamic
          ecosystems powered by heavy client-side JavaScript, intricate state
          management.
        </DetailSection>
        <DetailSection>
          Browser automation has transitioned from a &quot;nice-to-have&quot;
          utility to a mission-critical infrastructure. It is the backbone of
          several key pillars:
        </DetailSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Testing:</strong> Ensuring software quality through
              rigorous end-to-end (E2E) testing.
            </li>
            <li>
              <strong>Scraping:</strong> Gathering intelligence and data from
              the open web to drive business decisions.
            </li>
            <li>
              <strong>RPA (Robotic Process Automation):</strong> Automating
              repetitive, high-volume tasks to improve operational efficiency.
              (Data entry, managing emails and generating auto-replies etc.)
            </li>
          </ul>
        </DetailSection>

        <SubTitle>References</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <a
                href="https://developer.chrome.com/blog/test-automation-evolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                A look back in time: the evolution of test automation
              </a>
            </li>
          </ul>
        </DetailSection>

        <TitleSection>Tools Available for Web Automation</TitleSection>
        <DetailSection>
          Cypress, Selenium, Playwright, and Puppeteer are four of the most
          widely used tools but each serves different needs.
        </DetailSection>

        <SubTitle>How are they different?</SubTitle>
        <DetailSection>
          Here&apos;s a comprehensive comparison of the major web automation
          tools:
        </DetailSection>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Feature</TableHeader>
              <TableHeader>Playwright</TableHeader>
              <TableHeader>Selenium</TableHeader>
              <TableHeader>Puppeteer</TableHeader>
              <TableHeader>Cypress</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Browser Support</strong>
              </TableCell>
              <TableCell>Chromium, Firefox, WebKit</TableCell>
              <TableCell>Chrome, Firefox, Safari, Edge, IE</TableCell>
              <TableCell>Chrome, Firefox (primarily)</TableCell>
              <TableCell>Chromium-based browsers (limited others)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Language Support</strong>
              </TableCell>
              <TableCell>JavaScript, TypeScript, Python, .NET, Java</TableCell>
              <TableCell>Java, Python, C#, Ruby, PHP, JavaScript</TableCell>
              <TableCell>JavaScript</TableCell>
              <TableCell>JavaScript</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Architecture</strong>
              </TableCell>
              <TableCell>Bi-directional WebSocket connection</TableCell>
              <TableCell>WebDriver Protocol and Grid</TableCell>
              <TableCell>Chrome DevTools Protocol</TableCell>
              <TableCell>In-browser execution model</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Notable Key Strengths</strong>
              </TableCell>
              <TableCell>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cross-browser support</li>
                  <li>Auto-waiting capabilities</li>
                  <li>Shadow DOM support</li>
                  <li>Network interception</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul className="list-disc list-inside space-y-1">
                  <li>Multi-language flexibility</li>
                  <li>Extensive browser support</li>
                  <li>Mature ecosystem</li>
                  <li>Grid for parallel testing</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul className="list-disc list-inside space-y-1">
                  <li>Lightweight</li>
                  <li>Fast execution</li>
                  <li>Good for web scraping</li>
                  <li>PDF/screenshot generation</li>
                </ul>
              </TableCell>
              <TableCell>
                <ul className="list-disc list-inside space-y-1">
                  <li>Excellent developer experience</li>
                  <li>Real-time debugging</li>
                  <li>Automatic test reloading</li>
                  <li>Time-travel feature</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <SubTitle>References</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <a
                href="https://www.testingmavens.com/blogs/architecture-breakdown-selenium-cypress-and"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Architecture Breakdown: Selenium, Cypress, and Playwright
              </a>
            </li>
            <li>
              <a
                href="https://www.browserstack.com/guide/cypress-vs-selenium-vs-playwright-vs-puppeteer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Cypress vs Selenium vs Playwright vs Puppeteer: Core Differences
              </a>
            </li>
            <li>
              <a
                href="https://empathyfirstmedia.com/playwright-vs-selenium-vs-puppeteer-vs-cypress/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Playwright vs Selenium vs Puppeteer vs Cypress Comparison
              </a>
            </li>
          </ul>
        </DetailSection>

        <TitleSection>Chrome DevTools Protocol (CDP)</TitleSection>
        <DetailSection>
          Chrome DevTools Protocol (CDP) is a set of APIs that allows developers
          to communicate with Chromium-based browsers, including Google Chrome.
        </DetailSection>

        <SubTitle>Internals</SubTitle>
        <DetailSection>
          CDP is divided into domains. Each domain has a set of commands and
          events that it supports.
        </DetailSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Page Domain:</strong> Handles navigation, reloading, and
              printing.
            </li>
            <li>
              <strong>DOM Domain:</strong> Handles HTML elements (finding divs,
              changing text).
            </li>
            <li>
              <strong>Network Domain:</strong> Handles traffic (intercepting
              requests, caching).
            </li>
            <li>
              <strong>Runtime Domain:</strong> Handles JavaScript execution (the
              V8 engine).
            </li>
          </ul>
        </DetailSection>

        <ImageSection
          src="/images/blog/CDP_APIs.jpg"
          alt="Chrome DevTools Protocol Domains"
          width={1200}
          height={630}
        />

        <SubTitle>How does it work?</SubTitle>
        <ImageSection
          src="/images/blog/CDP_Flow.jpg"
          alt="CDP WebSocket Communication Flow"
          width={800}
          height={600}
        />
        <DetailSection>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              Payload is sent through the <strong>WebSocket</strong> connection
              to the browser instance.
            </li>
            <li>
              Inside Chrome, The Dispatcher receives the message. It reads the
              method string (Page.navigate). It looks up its internal map to see
              which C++ handler is responsible for the &quot;Page&quot; domain.
            </li>
            <li>
              The dispatcher triggers the actual C++ function inside
              Chrome&apos;s rendering engine (Blink).
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                <li>The browser pauses other lower-priority tasks.</li>
                <li>It initiates the network request to fetch the URL.</li>
                <li>It begins parsing the HTML.</li>
              </ol>
            </li>
            <li>
              While the page is loading, the browser doesn&apos;t wait for you
              to ask &quot;Is it done yet?&quot; It voluntarily pushes events
              back to you.
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                <li>
                  Network.requestWillBeSent (I&apos;m asking for the HTML)
                </li>
                <li>Page.domContentEventFired (The HTML is parsed)</li>
                <li>
                  Page.loadEventFired (Everything, including images, is loaded)
                </li>
              </ol>
            </li>
            <li>
              Once the browser effectively starts the navigation (or fails), it
              sends a reply back through the WebSocket. It references the
              original ticket number (id: 1).
            </li>
          </ol>
        </DetailSection>

        <TitleSection>
          How do tools like puppeteer/Playwright use CDP?
        </TitleSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Puppeteer</strong>, being Google&apos;s official client,
              uses CDP directly to communicate with Chrome or Chromium. It
              establishes a WebSocket connection to the browser and sends CDP
              commands to perform actions like navigating to a URL, clicking
              elements, injecting JavaScript, or capturing screenshots.
            </li>
            <li>
              <strong>Playwright</strong> provides a higher-level, cross-browser
              API that abstracts away the specifics of CDP. This means you
              primarily interact with Playwright&apos;s unified API methods
              (e.g., page.goto(), page.click()), and Playwright translates these
              into the appropriate CDP commands for Chromium or other
              browser-specific protocols for Firefox and WebKit.
            </li>
          </ul>
        </DetailSection>

        <TitleSection>How to access CDP?</TitleSection>
        <SubTitle>1. In Chrome:</SubTitle>
        <DetailSection>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>Open DevTools &gt; Settings ⚙ &gt; Experiments Tab.</li>
            <li>Enable Protocol Monitor</li>
            <li>Close and reopen DevTools</li>
            <li>
              Now click the ⋮ menu icon, choose More Tools and then select
              Protocol monitor.
            </li>
          </ol>
        </DetailSection>

        <ImageSection
          src="/images/blog/Protocol_UI.jpg"
          alt="Chrome Protocol Monitor"
          width={800}
          height={600}
        />

        <SubTitle>2. Chrome Debugger extension API</SubTitle>
        <DetailSection>
          Chrome extensions can interact with CDP directly but with limited
          exposure.
        </DetailSection>

        <SubTitle>3. Manually accessing the CDP using code</SubTitle>
        <DetailSection>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              Need to interact directly with the WebSocket API that chrome
              exposes.
            </li>
            <li>Launch Chrome with remote debugging port enabled.</li>
          </ol>
        </DetailSection>

        <CodeSection
          language="bash"
          code={`google-chrome \\
  --remote-debugging-port=9222 \\
  --user-data-dir="/tmp/chrome_dev_profile" \\
  --remote-allow-origins=https://hoppscotch.io`}
        />

        <DetailSection>
          <ol className="list-decimal list-inside ml-4 space-y-2" start={3}>
            <li>
              This will expose an HTTP endpoint that provides the necessary
              connection details.
            </li>
            <li>
              Get websocket url from →{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                http://localhost:9222/json/version
              </code>{" "}
              →{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                webSocketDebuggerUrl
              </code>
            </li>
            <li>
              We can send commands in JSON format to chrome from python/JS etc.
            </li>
            <li>
              Commands needs to have 3 keys:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>id</li>
                <li>method</li>
                <li>params</li>
              </ul>
            </li>
            <li>
              Try with{" "}
              <a
                href="https://hoppscotch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                https://hoppscotch.io/
              </a>{" "}
              and send below json:
            </li>
          </ol>
        </DetailSection>

        <CodeSection
          language="json"
          code={`{
  "id": 1,
  "method": "Page.navigate",
  "params": {
    "url": "https://google.com"
  }
}`}
        />

        <DetailSection>
          It will open google in chrome, After that, run the below command to
          capture a screen shot.
        </DetailSection>

        <CodeSection
          language="json"
          code={`{
  "id": 2,
  "method": "Page.captureScreenshot",
  "params": {
    "format": "png",
    "quality": 100,
    "fromSurface": true
  }
}`}
        />

        <DetailSection>You have done it 👏</DetailSection>

        <SubTitle>References</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <a
                href="https://developer.chrome.com/docs/extensions/reference/api/debugger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Chrome Debugger extension API
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/devtools-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Chrome DevTools NPM Library
              </a>
            </li>
            <li>
              <a
                href="https://reflect.run/articles/introduction-to-chrome-devtools-protocol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Introduction to CDP
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChromeDevTools/chrome-devtools-mcp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Chrome DevTools MCP
              </a>
            </li>
            <li>
              <a
                href="https://chromedevtools.github.io/devtools-protocol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Chrome DevTools Protocol Documentation
              </a>
            </li>
            <li>
              <a
                href="https://developer.chrome.com/docs/web-platform/blink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Blink Rendering Engine
              </a>
            </li>
          </ul>
        </DetailSection>

        <TitleSection>Stagehand</TitleSection>
        <DetailSection>
          Stagehand is an open-source browser automation TypeScript/JavaScript
          framework (developed by Browserbase) designed to bridge the gap
          between traditional, brittle script-based automation (like Selenium or
          vanilla Playwright) and modern, unpredictable AI agents.
        </DetailSection>
        <DetailSection>
          It allows developers to mix deterministic code with AI-driven actions.
        </DetailSection>

        <SubTitle>Advantages:</SubTitle>
        <DetailSection>
          Stagehand offers several advantages over conventional methods:
        </DetailSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Resilience:</strong> Adapts automatically to website
              changes, significantly reducing maintenance overhead.
            </li>
            <li>
              <strong>AI-powered adaptability:</strong> Integrates natural
              language processing for flexible, intent-driven automation.
            </li>
            <li>
              <strong>Cost optimization:</strong> Intelligently manages LLM
              usage to minimize operational expenses.
            </li>
          </ul>
        </DetailSection>

        <SubTitle>What does it provide?</SubTitle>
        <DetailSection>
          Imagine giving your testing suite a pair of Hands and Eyes, along with
          a Brain (an LLM), capable of navigating and interacting with a webpage
          driven entirely by natural language.
        </DetailSection>
        <DetailSection>
          Stagehand simplifies automation into four primary methods (primitives)
          that abstract away complex logic.
        </DetailSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>act:</strong> It takes a plain English instruction and
              executes the corresponding action on the page.
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Behind the scenes, an AI model analyzes the current state of
                  the web page (the DOM),
                </li>
                <li>
                  identifies the most relevant interactive elements (buttons,
                  links, input fields),
                </li>
                <li>
                  and maps the instruction to a specific action, like a click or
                  a key press
                </li>
              </ul>
            </li>
            <li>
              <strong>observe:</strong> returns a list of potential actions that
              match the instruction.
            </li>
            <li>
              <strong>extract:</strong> specify what you want to extract in
              natural language. You can optionally provide a Zod schema to
              ensure the output is structured correctly.
            </li>
            <li>
              <strong>agent:</strong> agent can take a high-level objective and
              break it down into a sequence of act and extract calls on its own.
            </li>
          </ul>
        </DetailSection>

        <SubTitle>Architecture</SubTitle>
        <ImageSection
          src="/images/blog/Stagehand.png"
          alt="Stagehand Architecture"
          width={800}
          height={600}
        />

        <SubTitle>References</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <a
                href="https://docs.stagehand.dev/v3/first-steps/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Stagehand Documentation
              </a>
            </li>
            <li>
              <a
                href="https://memo.d.foundation/breakdown/stagehand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Stagehand Breakdown
              </a>
            </li>
            <li>
              <a
                href="https://apidog.com/blog/stagehand/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Stagehand Guide
              </a>
            </li>
          </ul>
        </DetailSection>

        <TitleSection>Browserbase</TitleSection>
        <SubTitle>
          <strong>What is it?</strong>
        </SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Cloud-based &quot;browser-as-a-service&quot; platform that lets
              developers and AI systems run real web browsers (like Chrome) on
              demand.
            </li>
            <li>
              When you make a request, the platform automatically provisions an
              isolated browser instance in the cloud. Developers simply write or
              reuse their usual web-automation code (Playwright, Puppeteer,
              Selenium scripts, or Browserbase&apos;s Stagehand framework) and
              point it at Browserbase&apos;s endpoints.
            </li>
          </ul>
        </DetailSection>

        <SubTitle>Key features</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Integration:</strong> Fully compatible with standard
              tools. Browserbase supports Playwright, Puppeteer, Selenium and
              its own Stagehand framework natively.
            </li>
            <li>
              <strong>Scalable browsers:</strong> Browserbase can launch
              thousands of browser instances in parallel (spin-ups in
              milliseconds)
            </li>
            <li>
              <strong>Observability &amp; debugging:</strong> Built-in
              monitoring tools make it easy to trace issues. The Live View
              feature lets you embed a real-time video or even control the
              browser in your own app. All sessions are recorded: command logs,
              network traces, screenshots, and source snapshots are saved for
              post-run inspection.
            </li>
          </ul>
        </DetailSection>

        <SubTitle>Use cases</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>AI Web Agents:</strong> Build AI-driven agents that
              &quot;surf&quot; the web to gather information.
            </li>
            <li>
              <strong>Workflow Automation:</strong> Using browserbase, users can
              automate repetitive business tasks that involve web apps. Examples
              include filling out online forms (expense reports, tax filings,
              compliance checks), retrieving account information, or triggering
              processes in web-based tools.
            </li>
          </ul>
        </DetailSection>

        <SubTitle>References</SubTitle>
        <DetailSection>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <a
                href="https://docs.browserbase.com/introduction/what-is-browserbase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Browserbase Documentation
              </a>
            </li>
          </ul>
        </DetailSection>
      </div>
    </div>
  ),
};
