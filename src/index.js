import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom";
import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDom.render(<App />, document.getElementById("root"));
