import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import blogData from "../../assets/blogData.json";
import html2PDF from "jspdf-html2canvas";

const Blog = () => {
  const [creatingPDF, setCreatingPDF] = useState(false);

  const handleDownloadPDF = () => {
    const capture = document.querySelector(".capture-pdf");
    setCreatingPDF(true);
    html2PDF(capture).then((pdf) => {
      const imgData = pdf.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    });
  };
  return (
    <>
      <div className="mx-16 flex flex-col-reverse md:flex-row md:justify-between -mt-12">
        <div className="w-full flex flex-col">
          <h1 className="text-5xl font-bold mt-8 text-center md:text-left">
            My{" "}
            <span className="italic">
              <span className="text-pink-300">Blog</span>
            </span>
          </h1>
          <h2 className="text-2xl font-bold mt-6 ">Write you blog here.</h2>
          <div className="mt-3">
            <button
              className="btn btn-neutral capitalize text-lg"
              onClick={handleDownloadPDF}
              disabled={!(creatingPDF === false)}
            >
              {creatingPDF ? (
                <span className="">Creating PDF</span>
              ) : (
                <span>Create PDF</span>
              )}
            </button>
          </div>
        </div>
        <div className="w-full">
          <Player
            autoplay
            loop
            src={blogData}
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div>

      <div className="mx-16 mt-8 items-center capture-pdf text-black">
        <div className="border-4 p-3 rounded-md m-4 bg-white border-pink-300">
          <div className="pb-2">
            <strong>Qus-1: </strong> Tell us the differences between
            uncontrolled and controlled components.
          </div>
          <div>
            <strong>Ans: </strong> In React, a controlled component is a
            component that is controlled by React state, while an uncontrolled
            component is a component that maintains its own internal state. A
            controlled component receives its current value and an update
            callback via props, and the parent component manages the state of
            the component.
            <br />
            Example of controlled components : The state is updated through
            event handlers, typically the onChange event for input elements.
            <br />
            Example of controlled uncontrolled : Refs are often used to interact
            with the DOM directly to get the current value when needed.
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-pink-300">
          <div className="pb-2">
            <strong>Qus-2: </strong>How to validate React props using PropTypes?
          </div>
          <div>
            <strong>Ans: </strong> In React, PropTypes is a way to define the
            types of props that a component should receive. It helps catch
            common bugs and provides a form of documentation for what props a
            component expects.
            <br />
            Import PropTypes in your component: Import PropTypes in the file
            where you define your React component:
            <br />
            Define PropTypes for your component: Below your component
            definition, use the propTypes property to define the types for your
            props:
            <br />
            Use PropTypes for each prop: For each prop that your component
            expects, specify its expected type using PropTypes. Here are some
            common prop types:
            <br /> PropTypes.string: Expects a string.
            <br /> PropTypes.number: Expects a number.
            <br /> PropTypes.bool: Expects a boolean.
            <br /> PropTypes.array: Expects an array.
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-pink-300">
          <div className="pb-2">
            <strong>Qus-3: </strong> Tell us the difference between nodejs and
            express js
          </div>
          <div>
            <strong>Ans: </strong> Node.js and Express.js are both
            JavaScript-based technologies, but they serve different purposes in
            the web development stack. <br /> Node.js: <br />
            Node.js is not a framework but a runtime environment. It allows you
            to execute JavaScript code on the server side, outside the browser.
            Node.js is known for its event-driven, non-blocking I/O model, which
            makes it well-suited for handling concurrent connections and
            building scalable network applications. Node.js provides core
            functionalities for server-side JavaScript execution, such as file
            system operations, networking, and more. <br />
            Express.js:
            <br />
            Express.js, on the other hand, is a web application framework for
            Node.js. It simplifies the process of building robust, scalable, and
            maintainable web applications by providing a set of features and
            tools. Express.js facilitates the routing of HTTP requests to
            corresponding handlers, making it easier to manage different parts
            of your application.Express.js uses middleware functions, which are
            functions that have access to the request and response objects.
            These functions can modify the request or response, terminate the
            request-response cycle, or call the next middleware in the stack.
            While Express.js itself doesn't dictate the use of a specific
            template engine, it integrates well with various engines like EJS or
            Handlebars, allowing you to render dynamic content on the server.
            <br />
          </div>
        </div>

        <div className="border-4 p-3 rounded-md m-4 bg-white border-pink-300">
          <div className="pb-2">
            <strong>Qus-4: </strong> What is a custom hook, and why will you
            create a custom hook?
          </div>
          <div>
            <strong>Ans: </strong> A custom hook in React is a JavaScript
            function that starts with the word "use" and may call other hooks.
            These custom hooks allow you to extract and reuse state logic and
            side effects in functional components. Custom hooks are a way to
            share logic between components without relying on higher-order
            components, render props, or other patterns.
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
