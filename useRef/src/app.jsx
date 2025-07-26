import { useRef } from "preact/hooks";
import "./app.css";

export function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Focus input with useRef</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something...."
        style={{ padding: "10px", fontSize: "1rem" }}
      />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
