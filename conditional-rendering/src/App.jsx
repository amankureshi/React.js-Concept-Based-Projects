import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  const [todos, setTodos] = useState([
    {
      title: "First",
      desc: "I am First",
    },
    {
      title: "Second",
      desc: "I am Second",
    },
    {
      title: "Third",
      desc: "I am Third",
    },
  ]);

  return (
    <>
      <div>
        {/*<-------- Ternary Operator ---------->*/}

        {/* condition ? True : Flase */}
        {/* {showBtn ? (
          <button>I will be show only when second button is clicked</button>
        ) : (
          "Not show"
        )} */}

        {/* When use If else than use this condition ------->*/}
        {showBtn ? (
          <button>showBtn is true</button>
        ) : (
          <button>showBtn is false</button>
        )}

        {/*Logical Operator */}
        {/* {showBtn && <button>Show button</button>} */}
        <h1>Condition Rendering</h1>

        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle showBtn {count}
        </button>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </div>
    </>
  );
}

export default App;
