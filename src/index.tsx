import { createRoot } from "react-dom/client";
import App from "@app/App";
import "@app/styles/main.scss";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
