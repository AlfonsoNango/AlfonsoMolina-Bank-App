import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar.jsx";
import CreateAccount from "./createaccount.jsx";
import Login from "./login.jsx";
import Deposit from "./deposit.jsx";
import Withdraw from "./withdraw..jsx";
import Balance from "./balance.jsx";
import AllData from "./alldata.jsx";
import Home from "./home.jsx";
import "bootstrap/dist/css/bootstrap.css";

export const UserContext = createContext();
function Spa() {
  return (
    <div>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Spa />,
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
