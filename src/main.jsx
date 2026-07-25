import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init.jsx";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App.jsx";
import ThemeFlowbiteConfig from "./theme/ThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeFlowbiteConfig>
      <ThemeInit />
      <App />
    </ThemeFlowbiteConfig>
  </Provider>,
);

initThemeMode();
