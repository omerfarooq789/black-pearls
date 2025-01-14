import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import ReactGA from "react-ga4";

ReactGA.initialize("G-VY9Z6W1097");
ReactGA.send("pageview");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
