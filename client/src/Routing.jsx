import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./pages/profile/Profile";
export const Routing = createBrowserRouter([
  {
    path: "/",
    element:<PrivateRoute> <Layout /></PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);