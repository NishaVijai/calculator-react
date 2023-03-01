// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // remove strict mode - https://stackoverflow.com/questions/64118579/react-help-please-why-console-log-is-printing-two-times-on-first-render
  // <StrictMode>
  <App />
  // </StrictMode>
);
