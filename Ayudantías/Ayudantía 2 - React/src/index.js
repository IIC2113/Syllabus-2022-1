import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const tasksList = [
  "Preparar ayudantía de react",
  "Ir a la universidad",
  "Presentar ayudantía",
];

ReactDOM.render(<App tasks={tasksList} />, document.getElementById("root"));

