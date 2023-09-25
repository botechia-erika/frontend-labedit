import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/css/bootstrap.min.css'
import './styles/css/animista.min.css'
import './styles/css/grid12cols.css'
import './styles/css/styles.css'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
