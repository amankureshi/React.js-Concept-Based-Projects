import "./app.css";

export function App() {
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Focus input with useRef</h1>
      <input
        type="text"
        placeholder="Type something...."
        style={{ padding: "10px", fontSize: "1rem" }}
      />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
