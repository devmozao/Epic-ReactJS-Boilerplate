import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.querySelector("#_root_");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  throw "Error on mount root element.";
}
