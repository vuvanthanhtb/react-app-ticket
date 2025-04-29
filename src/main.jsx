import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app.shell";
import "./styles/index.module.scss";
import "./styles/loading.module.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
