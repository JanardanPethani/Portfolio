import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSection";
import Table from "@/components/Blog/Table";

export const fetchCache = "force-no-store";

export const blogData = [
  {
    slug: "proto-vs-prototype",
    title: "Understanding __proto__ vs prototype in JavaScript",
    publishDate: "2025-04-27",
    categories: ["JavaScript", "OOP", "Prototypes"],
    excerpt: "A deep dive into the difference between __proto__ and prototype in JavaScript, with simple and complex examples to understand prototype inheritance.",
    content: (
      <div className="relative">
        <div className="mx-auto">
          <TitleSection>Introduction</TitleSection>
          <DetailSection>
            {`JavaScript&apos;s prototype system is one of its most powerful features, but it can be confusing to understand the difference between __proto__ and prototype. In this post, we&apos;ll explore both concepts with clear examples and deep insights into how they work.`}
          </DetailSection>

          <TitleSection>What is a Prototype?</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>
              A prototype in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. Think of it as a template or a blueprint that other objects can use to share common functionality.
            </div>
            <div className="mt-4">
              In JavaScript, every object has a prototype, which is another object that it inherits from. This creates a chain of inheritance, known as the prototype chain.
            </div>
          </div>

          <TitleSection>The Basics</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>Let&apos;s start with the fundamental concepts:</div>
            <ul className="list-disc list-inside ml-4">
              <li><strong>prototype</strong> is a property of constructor functions. It defines the properties and methods that will be shared by all instances of the constructor.</li>
              <li><strong>__proto__</strong> is a property of <strong>objects</strong> that points to their prototype. It is the actual link between objects in the prototype chain.</li>
            </ul>
            <div className="mt-4">
              According to the ECMAScript specification, every object in JavaScript has an internal `[[Prototype]]` property, which is exposed to user-level code via the `__proto__` property. This is what makes JavaScript&apos;s prototype-based inheritance possible.
            </div>
          </div>

          <TitleSection>Simple Example</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>Let&apos;s look at a simple example to understand the relationship:</div>
          </div>
          <CodeSection
            language="javascript"
            code={`// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
  console.log(\`Hello, I&apos;m \${this.name}\`);
};

// Creating an instance
const person = new Person('John');

// The relationship between __proto__ and prototype
console.log(person.__proto__ === Person.prototype); // true
console.log(person.sayHello()); // "Hello, I&apos;m John"`}
          />

          <TitleSection>Understanding the Chain</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>When you try to access a property on an object, JavaScript follows this process:</div>
            <ol className="list-decimal list-inside ml-4">
              <li>Check if the property exists on the object itself</li>
              <li>If not, check the object&apos;s __proto__ (which points to the constructor&apos;s prototype)</li>
              <li>Continue up the prototype chain until the property is found or the chain ends</li>
            </ol>
            <div className="mt-4">
              This mechanism is known as <strong>dynamic dispatch</strong> or <strong>delegation</strong>. Unlike static dispatch (where references are resolved at compile time), dynamic dispatch resolves references at runtime, allowing for full mutability of the inheritance chain.
            </div>
          </div>

          <TitleSection>Complex Example</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>Let&apos;s explore a more complex example with inheritance:</div>
          </div>
          <CodeSection
            language="javascript"
            code={`// Base class
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log('Some generic sound');
};

// Derived class
function Dog(name, breed) {
  // Call the Animal constructor to initialize 'name' in the Dog instance
  Animal.call(this, name); // <-- This ensures Dog instances get the 'name' property from Animal
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() {
  console.log('Woof!');
};

// Create instances
const dog = new Dog('Rex', 'German Shepherd');

// The prototype chain
console.log(dog.__proto__ === Dog.prototype); // true
console.log(dog.__proto__.__proto__ === Animal.prototype); // true
console.log(dog.__proto__.__proto__.__proto__ === Object.prototype); // true

// Method calls
dog.makeSound(); // "Some generic sound"
dog.bark(); // "Woof!"`}
          />

          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <strong>Note on <code>Object.create</code>:</strong> <br />
            <code>Object.create(proto)</code> creates a new object and sets its prototype to <code>proto</code>. This is the recommended way to set up inheritance in JavaScript, as it cleanly establishes the prototype chain without invoking the constructor of the parent. In the example above, <code>Dog.prototype = Object.create(Animal.prototype)</code> means all Dog instances inherit from Animal, but the Animal constructor is not called when setting up the prototype.
          </div>

          <TitleSection>Key Differences</TitleSection>
          <Table
            headers={["Aspect", "prototype", "__proto__"]}
            rows={[
              [
                "What is it?",
                "A property of constructor functions",
                "A property of all objects (instances)",
              ],
              [
                "Purpose",
                "Defines properties/methods shared by all instances",
                "Points to the object&apos;s prototype (the actual link in the chain)",
              ],
              [
                "Where is it found?",
                "On constructor functions (e.g., Person.prototype)",
                "On all objects (e.g., person.__proto__)",
              ],
              [
                "How is it used?",
                "To add shared methods/properties for instances",
                "To traverse the prototype chain for inheritance",
              ],
              [
                "Best Practice",
                "Use to define shared behavior",
                "Avoid direct manipulation; use Object.getPrototypeOf/setPrototypeOf",
              ],
            ]}
          />

          <TitleSection>Best Practices</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <ul className="list-disc list-inside ml-4">
              <li>Use <code>Object.create()</code> for setting up inheritance</li>
              <li>Avoid modifying <code>__proto__</code> directly</li>
              <li>Use <code>Object.getPrototypeOf()</code> instead of <code>__proto__</code> when possible</li>
              <li>Remember to set the constructor property when creating custom prototype chains</li>
              <li>Use <code>Object.setPrototypeOf()</code> for changing prototypes after object creation</li>
            </ul>
          </div>

          <TitleSection>Class-based Inheritance</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <div>It&apos;s important to note that class-based inheritance in JavaScript is implemented on top of the prototype-based delegation. When you use the <code>class</code> keyword, it&apos;s essentially syntactic sugar that:</div>
            <ul className="list-disc list-inside ml-4">
              <li>Creates a constructor function</li>
              <li>Sets up the prototype chain</li>
              <li>Handles method inheritance</li>
              <li>Manages the <code>super</code> keyword</li>
            </ul>
          </div>

          <TitleSection>Conclusion</TitleSection>
          <DetailSection>
            {`Understanding the difference between __proto__ and prototype is crucial for working with JavaScript&apos;s object-oriented features. While __proto__ represents the actual prototype chain link, prototype is used to define shared properties and methods for all instances of a constructor function. This prototype-based inheritance system is what makes JavaScript so flexible and powerful.`}
          </DetailSection>

          <TitleSection>References</TitleSection>
          <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            <ul className="list-disc list-inside ml-4">
              <li>
                <a 
                  href="http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/#prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  JavaScript. The Core: 2nd Edition by Dmitry Soshnikov
                </a>
              </li>
              <li>ECMAScript Language Specification</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "nx-nestjs-mysql-react-docker",
    title:
      "Building a Full-Stack Application with NX, NestJS, MySQL, React, and Docker",
    publishDate: "2025-04-16",
    categories: ["NX", "NestJS", "MySQL", "React", "Docker", "Full-Stack"],
    excerpt:
      "A comprehensive guide to creating a modern full-stack application using NX monorepo, NestJS backend, MySQL database, React frontend, and Docker containerization.",
    content: (
      <div className="relative">
        <div className="mx-auto">
          <TitleSection>Introduction</TitleSection>
          <DetailSection>
            {`In this blog post, I have summarized how you can start with NX for monorepo management, NestJS for the backend, MySQL for the database, React for the frontend, and Docker for containerization.`}
          </DetailSection>

          <TitleSection>Technology Stack</TitleSection>
          <DetailSection>
            <h6>The project leverages the following technologies:</h6>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>NX</strong> - A powerful build system and monorepo tool
                that provides a modern development experience.{" "}
                <a
                  href="https://nx.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  NX
                </a>
              </li>
              <li>
                <strong>NestJS</strong> - A progressive Node.js framework for
                building efficient and scalable server-side applications.{" "}
                <a
                  href="https://nestjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  NestJS
                </a>
              </li>
              <li>
                <strong>MySQL</strong> - A reliable relational database
                management system.{" "}
                <a
                  href="https://www.mysql.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  MySQL
                </a>
              </li>
              <li>
                <strong>React</strong> - A JavaScript library for building user
                interfaces.{" "}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  React
                </a>
              </li>
              <li>
                <strong>Docker</strong> - A platform for developing, shipping,
                and running applications in containers.{" "}
                <a
                  href="https://www.docker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Docker
                </a>
              </li>
              <li>
                <strong>TypeScript</strong> - A typed superset of JavaScript
                that enhances code quality and developer experience.{" "}
                <a
                  href="https://www.typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  TypeScript
                </a>
              </li>
            </ul>
          </DetailSection>

          <TitleSection>Link to Repo</TitleSection>
          <DetailSection>
            <p>
              You can find the complete source code for this project on GitHub:
              &nbsp;
              <a
                href="https://github.com/JanardanPethani/nx-nestjs-reactjs-mysql/tree/with-docker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                NX NestJS React MySQL Project
              </a>
            </p>
            <br />
            <p>
              Feel free to explore the repository, contribute, or use it as a
              reference for your own projects.
            </p>
          </DetailSection>
        </div>
      </div>
    ),
  },
  {
    slug: "portfolio-tech-stack",
    title: "Building My Portfolio with Modern Web Technologies",
    publishDate: "2025-01-01",
    categories: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    excerpt:
      "A detailed look at the modern web technologies and design decisions behind my portfolio website, including Next.js, React, TypeScript, and TailwindCSS for creating a responsive and performant web application.",
    content: (
      <div className="relative">
        <div className="mx-auto">
          <TitleSection>Introduction</TitleSection>
          <DetailSection>
            {`Welcome to a deep dive into the technology stack and features of my
            portfolio website. I&apos;ll explain the key technologies and design
            decisions that went into creating this modern, responsive web
            application.`}
          </DetailSection>

          <TitleSection>Core Technologies</TitleSection>
          <DetailSection>
            <h6>The portfolio is built with a powerful modern stack:</h6>
            <ul className="list-disc list-inside ml-4">
              <li>Next.js 14 - For server-side rendering and routing</li>
              <li>React - For component-based UI development</li>
              <li>
                TypeScript - For type safety and better developer experience
              </li>
              <li>TailwindCSS - For responsive and customizable styling</li>
            </ul>
          </DetailSection>

          <TitleSection>UI Components and Styling</TitleSection>
          <DetailSection>
            {`The UI is built using a combination of custom components and Tailwind
            CSS for styling. I&apos;ve implemented dark mode support and responsive
            design patterns throughout the application.`}
          </DetailSection>

          <TitleSection>Features and Functionality</TitleSection>
          <DetailSection>
            <h6>Key features of the portfolio include:</h6>
            <ul className="list-disc list-inside ml-4">
              <li>Blog system with markdown support</li>
              <li>Dark/Light theme switching</li>
              <li>Responsive design</li>
              <li>Category filtering and search functionality</li>
              <li>Dynamic routing with Next.js</li>
              <li>Smooth animations with Framer Motion</li>
            </ul>
          </DetailSection>

          <TitleSection>Performance and Optimization</TitleSection>
          <DetailSection>
            <h6>
              The application is optimized for performance using Next.js&apos;s
              built-in features:
            </h6>
            <ul className="list-disc list-inside ml-4">
              <li>Server-side rendering for better SEO</li>
              <li>Image optimization</li>
              <li>Code splitting</li>
              <li>Static site generation where applicable</li>
            </ul>
          </DetailSection>

          <TitleSection>Conclusion</TitleSection>
          <DetailSection>
            {`This portfolio showcases not just my projects, but also my ability to
            work with modern web technologies and implement best practices in web
            development. Feel free to explore the various sections and features
            I&apos;ve implemented.`}
          </DetailSection>
        </div>
      </div>
    ),
  },
  {
    slug: "css-view-transition-api",
    title: "Using CSS View-Transition API",
    publishDate: "2025-01-01",
    categories: ["CSS", "Transitions", "Web API"],
    excerpt:
      "Enhance your page transitions using the new CSS view-transition API.",
    content: (
      <div className="relative">
        <TitleSection>Overview</TitleSection>
        <DetailSection>
          In this update I integrated the experimental CSS view-transition API
          to enable smoother page transitions.
        </DetailSection>
        <TitleSection>Implementation Steps</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside">
            <li>
              Added CSS rules for view transitions using the ::view-transition
              pseudo-element.
            </li>
            <li>
              Triggered transitions via document.startViewTransition() before
              DOM updates.
            </li>
            <li>Configured easing and timing for a smooth effect.</li>
          </ol>
        </DetailSection>
        <TitleSection>Example</TitleSection>
        <CodeSection
          language="tsx"
          code={`/* CSS */
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(30px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-30px);
  }
}

#main {
  view-transition-name: main;
}

::view-transition-old(main) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

::view-transition-new(main) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}

/* JavaScript */
const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      // browser supports view transition. Animate the transition.
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href as string);
      });
    }
};`}
        ></CodeSection>
      </div>
    ),
  },
];
