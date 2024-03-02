import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./navbar.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";

function Spa() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>hello world</div>,
    },

    { path: "/CreateAccount/", element: <App /> },
  ]);
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);
