import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // <- Sjekk at dette er riktig

import App from "./App.jsx";
import "./index.css";

// Definer ruter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
