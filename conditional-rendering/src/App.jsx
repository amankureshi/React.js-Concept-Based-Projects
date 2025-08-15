import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div>
        {showBtn ? (
          <button>I will be show only when second button is clicked</button>
        ) : (
          "Not show"
        )}
        <h1>Condition Rendering</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
