import { initThemeMode } from "flowbite-react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import store from "./store";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeInit />
    <App />
  </Provider>,
);

initThemeMode();
