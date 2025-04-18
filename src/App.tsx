import "./App.css";
import Avatar from "./avatar";
import { Greetings } from "./Greetings";

function App() {
  // component declaration

  return (
    <div className="flex flex-col gap-8">
      <Greetings name="John" /> {/*props: name is a prop of type string*/}
      <Avatar name="John Doe" role="Admin" />
      <Avatar name="John Doe" role="Vendor" />
    </div>
  );
}

export default App; // default export

// React component name must be PascalCase
// React component must return a JSX element
// JSX is a syntax extension to JavaScript. It is similar to HTML, but it is not HTML.
// React component must return a single root element
