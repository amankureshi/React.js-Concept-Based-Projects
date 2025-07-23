import { useState } from "react";
import "./app.css";

function App() {
  const [width, setWidth] = useState();

  return (
    <>
      <div>
        <h1>Window Width Tracker</h1>
        <p>currenct width:-</p>
      </div>
    </>
  );
}
