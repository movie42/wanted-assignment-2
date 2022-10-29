import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles, theme } from "./lib";
import { ContextAPIProvider } from "./lib/state/ContextAPI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <ContextAPIProvider>
          <App />
        </ContextAPIProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
