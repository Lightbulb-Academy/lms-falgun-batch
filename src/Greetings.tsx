function Greetings({ name }: { name: string }) {
  // component name in PascalCase
  return (
    // return a JSX element
    <div>
      <h1 className="greetings" style={{ color: "white" }}>
        Hello! {name}
      </h1>
    </div>
  );
}

export { Greetings }; // named export

function Welcome() {
  return (
    <div>
      <h1>Welcome to the website</h1>
    </div>
  );
}

export { Welcome }; // we use named export when we want to export multiple components
