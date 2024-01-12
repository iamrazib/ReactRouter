import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { Profile } from "../Pages/Profile";
import { Notfound } from "../Pages/Notfound";
import { Layout } from "../Pages/Layout/Layout";


export const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profileDetails",
        element: <Profile />,
      },
      {
        path: "profileDetails/:id",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

