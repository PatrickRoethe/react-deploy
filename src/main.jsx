import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Dog } from "./Dog.jsx"; // 👈 Importer Dog-komponenten
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
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/dog", // 👈 Legger til Dog-siden her
    element: <Dog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
