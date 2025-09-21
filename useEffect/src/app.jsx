import { useEffect, useState } from "react";

import "./app.css";

export function App() {
  const [width, setWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    console.log(width);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Window Width Tracker</h1>
        <p>
          currenct width:- <strong>{width}px</strong>
        </p>
      </div>
    </>
  );
}
