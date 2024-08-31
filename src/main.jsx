import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./layout/Root.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { footerHeight, navHeight } from "./utils/constants.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login navHeight={navHeight} footerHeight={footerHeight} />,
      },
      {
        path: "/register",
        element: <Login navHeight={navHeight} footerHeight={footerHeight} />,
      },
      {
        path: "/cart",
        element: <Cart navHeight={navHeight} footerHeight={footerHeight} />,
      },
      {
        path: "/pizza/:pizzaId",
        element: <Pizza />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
