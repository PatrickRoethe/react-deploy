import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Lag en test-side
function TestPage() {
  return <h1>This is the Test Page</h1>;
}

// Definer ruter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test", // 👈 Legger til Test Page her!
    element: <TestPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
