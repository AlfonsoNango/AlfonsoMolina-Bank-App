import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar.jsx";
import Home from "./home.jsx";
import Login from "./login.jsx";
import CreateAccount from "./createaccount.jsx";
import Deposit from "./deposit.jsx";
import Withdraw from "./withdraw.jsx";
import AllData from "./alldata.jsx";

import "bootstrap/dist/css/bootstrap.css";
import LoginStatus from "./login_status.jsx";

export const UserContext = createContext();
function Spa() {
  return (
    <div>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Abel",
              email: "abel@mit.edu",
              password: "abel",
              balance: 100,
              isLogged: "false",
            },
            {
              name: "Alfonso",
              email: "alfonso@mit.edu",
              password: "alfonso",
              balance: 100,
              isLogged: "false",
            },
            {
              name: "Carlos",
              email: "carlos@mit.edu",
              password: "carlos",
              balance: 100,
              isLogged: "false",
            },
            {
              name: "Lina",
              email: "lina@mit.edu",
              password: "lina",
              balance: 100,
              isLogged: "false",
            },
          ],
        }}
      >
        <Outlet />
        <LoginStatus />
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
      { path: "/login/", element: <Login /> },
      { path: "/createaccount/", element: <CreateAccount /> },
      { path: "/deposit/", element: <Deposit /> },
      { path: "/withdraw/", element: <Withdraw /> },
      { path: "/alldata/", element: <AllData /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
