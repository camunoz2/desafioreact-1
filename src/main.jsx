import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Login from "./routes/login.jsx";
import NotFound from "./routes/notFound.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
