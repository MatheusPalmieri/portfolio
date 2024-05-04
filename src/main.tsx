import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./styles/tailwind.css";
import "./styles/global.css";

// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { Cursor } from "./components/Cursor/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cursor />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
