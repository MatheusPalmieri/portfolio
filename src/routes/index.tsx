import { Layout } from "@/components/Layout";
import { Development } from "@/pages/Development";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <Development />,
      },
      {
        path: "skills",
        element: <Development />,
      },
      {
        path: "projects",
        element: <Development />,
      },
    ],
  },
]);
