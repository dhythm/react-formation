import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./components";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
