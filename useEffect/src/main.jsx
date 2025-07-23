import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";
// import App from "./app.jsx"; // ✅ Default export ke liye

render(<App />, document.getElementById("app"));
