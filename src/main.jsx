import React from "react";
import ReactDOM from "react-dom/client";
import CreateAccount from "./createaccount.jsx";
import NavBar from "./navbar.jsx";
import Login from "./login.jsx";
import Deposit from "./deposit.jsx";
import Withdraw from "./withdraw..jsx";
import Balance from "./balance.jsx";
import AllData from "./alldata.jsx";
import Home from "./home.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/createaccount/", element: <CreateAccount /> },
      { path: "/login/", element: <Login /> },
      { path: "/deposit/", element: <Deposit /> },
      { path: "/withdraw/", element: <Withdraw /> },
      { path: "/balance/", element: <Balance /> },
      { path: "/alldata/", element: <AllData /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
