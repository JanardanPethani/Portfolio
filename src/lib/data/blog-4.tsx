import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "@/components/Blog/Table";

export const blog = {
  slug: "proto-vs-prototype",
  title: "Understanding __proto__ vs prototype in JavaScript",
  publishDate: "2025-04-27",
  categories: ["JavaScript", "OOP", "Prototypes"],
  excerpt:
    "A deep dive into the difference between __proto__ and prototype in JavaScript, with simple and complex examples to understand prototype inheritance.",
  thumbnail: "/images/blog/default-thumbnail.jpg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          JavaScript&apos;s prototype system is one of its most powerful
          features, but it can be confusing to understand the difference between
          __proto__ and prototype. In this post, we&apos;ll explore both
          concepts with clear examples and deep insights into how they work.
        </DetailSection>

        <TitleSection>What is a Prototype?</TitleSection>
        <div className="text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <div>
            A prototype in JavaScript is a mechanism that allows objects to
            inherit properties and methods from other objects. Think of it as a
            template or a blueprint that other objects can use to share common
            functionality.
          </div>
          <div className="mt-4">
            In JavaScript, every object has a prototype, which is another object
            that it inherits from. This creates a chain of inheritance, known as
            the prototype chain.
          </div>
        </div>

        <TitleSection>The Basics</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <div>Let&apos;s start with the fundamental concepts:</div>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>prototype</strong> is a property of constructor functions.
              It defines the properties and methods that will be shared by all
              instances of the constructor.
            </li>
            <li>
              <strong>__proto__</strong> is a property of{" "}
              <strong>objects</strong> that points to their prototype. It is the
              actual link between objects in the prototype chain.
            </li>
          </ul>
          <div className="mt-4">
            According to the ECMAScript specification, every object in
            JavaScript has an internal `[[Prototype]]` property, which is
            exposed to user-level code via the `__proto__` property. This is
            what makes JavaScript&apos;s prototype-based inheritance possible.
          </div>
        </div>

        <TitleSection>Simple Example</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <div>
            Let&apos;s look at a simple example to understand the relationship:
          </div>
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
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <div>
            When you try to access a property on an object, JavaScript follows
            this process:
          </div>
          <ol className="list-decimal list-inside ml-4">
            <li>Check if the property exists on the object itself</li>
            <li>
              If not, check the object&apos;s __proto__ (which points to the
              constructor&apos;s prototype)
            </li>
            <li>
              Continue up the prototype chain until the property is found or the
              chain ends
            </li>
          </ol>
          <div className="mt-4">
            This mechanism is known as <strong>dynamic dispatch</strong> or{" "}
            <strong>delegation</strong>. Unlike static dispatch (where
            references are resolved at compile time), dynamic dispatch resolves
            references at runtime, allowing for full mutability of the
            inheritance chain.
          </div>
        </div>

        <TitleSection>Complex Example</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
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

        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <strong>
            Note on <code>Object.create</code>:
          </strong>{" "}
          <br />
          <code>Object.create(proto)</code> creates a new object and sets its
          prototype to <code>proto</code>. This is the recommended way to set up
          inheritance in JavaScript, as it cleanly establishes the prototype
          chain without invoking the constructor of the parent. In the example
          above, <code>Dog.prototype = Object.create(Animal.prototype)</code>{" "}
          means all Dog instances inherit from Animal, but the Animal
          constructor is not called when setting up the prototype.
        </div>

        <TitleSection>Key Differences</TitleSection>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Aspect</TableHeader>
              <TableHeader>prototype</TableHeader>
              <TableHeader>__proto__</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>What is it?</TableCell>
              <TableCell>A property of constructor functions</TableCell>
              <TableCell>A property of all objects (instances)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Purpose</TableCell>
              <TableCell>
                Defines properties/methods shared by all instances
              </TableCell>
              <TableCell>
                Points to the object&apos;s prototype (the actual link in the
                chain)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Where is it found?</TableCell>
              <TableCell>
                On constructor functions (e.g., Person.prototype)
              </TableCell>
              <TableCell>On all objects (e.g., person.__proto__)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>How is it used?</TableCell>
              <TableCell>
                To add shared methods/properties for instances
              </TableCell>
              <TableCell>
                To traverse the prototype chain for inheritance
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Best Practice</TableCell>
              <TableCell>Use to define shared behavior</TableCell>
              <TableCell>
                Avoid direct manipulation; use
                Object.getPrototypeOf/setPrototypeOf
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <TitleSection>Best Practices</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <ul className="list-disc list-inside ml-4">
            <li>
              Use <code>Object.create()</code> for setting up inheritance
            </li>
            <li>
              Avoid modifying <code>__proto__</code> directly
            </li>
            <li>
              Use <code>Object.getPrototypeOf()</code> instead of{" "}
              <code>__proto__</code> when possible
            </li>
            <li>
              Remember to set the constructor property when creating custom
              prototype chains
            </li>
            <li>
              Use <code>Object.setPrototypeOf()</code> for changing prototypes
              after object creation
            </li>
          </ul>
        </div>

        <TitleSection>Class-based Inheritance</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          <div>
            It&apos;s important to note that class-based inheritance in
            JavaScript is implemented on top of the prototype-based delegation.
            When you use the <code>class</code> keyword, it&apos;s essentially
            syntactic sugar that:
          </div>
          <ul className="list-disc list-inside ml-4">
            <li>Creates a constructor function</li>
            <li>Sets up the prototype chain</li>
            <li>Handles method inheritance</li>
            <li>
              Manages the <code>super</code> keyword
            </li>
          </ul>
        </div>

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          Understanding the difference between __proto__ and prototype is
          crucial for working with JavaScript&apos;s object-oriented features.
          While __proto__ represents the actual prototype chain link, prototype
          is used to define shared properties and methods for all instances of a
          constructor function. This prototype-based inheritance system is what
          makes JavaScript so flexible and powerful.
        </DetailSection>

        <TitleSection>References</TitleSection>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
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
          </ul>
        </div>
      </div>
    </div>
  ),
};
