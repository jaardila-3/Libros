import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Hooks from "./components/routes/Hooks.jsx";
import Redux from "./components/routes/Redux.jsx";
import ErrorPage from "./error-page.jsx";
import Users from "./components/routes/Users.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hooks",
    element: <Hooks />,
  },
  {
    path: "redux",
    element: <Redux />,
  },
  {
    path: "user/:id",
    element: <Users />,
    loader: ({ params }) => {
      //return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      return params.id;
    },
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
