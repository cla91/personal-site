import App from "@/App";
import { lazy } from "react";

const Error = lazy(() => import("@/pages/Error/Error"));
const Home = lazy(() => import("@/pages/Home/Home"));

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
