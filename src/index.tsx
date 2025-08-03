// src/index.tsx

import React from "react";
import ReactDOM from "react-dom/client";

// 1. Core Mantine styles (you already have this)
import "@mantine/core/styles.css";

// 2. Add the styles for the dates components
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { AppRouter } from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications position="top-right" />
      <AppRouter />
    </MantineProvider>
  </React.StrictMode>
);
