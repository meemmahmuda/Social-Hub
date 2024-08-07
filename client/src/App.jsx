import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  
  Outlet,
  Navigate,
  
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

import Userlist from "./pages/Users/Userlist";
import Postlist from "./pages/Posts/Postlist";
import Storylist from "./pages/Stories/Storylist";
import Commentlist from "./pages/Comments/Commentlist";
import Commentupdate from "./pages/Comments/Commentupdate";

import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  const { user, loading } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (loading) {
      return <h1>Loading.............</h1>;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "/dashboard/userlist", element: <Userlist /> },
        { path: "/dashboard/postlist", element: <Postlist /> },
        { path: "/dashboard/storylist", element: <Storylist /> },
        { path: "/dashboard/commentlist", element: <Commentlist /> },

        { path: "/dashboard/userlist/userupdate", element: <Userlist /> },
        { path: "/dashboard/postlist/postupdate", element: <Postlist /> },
        { path: "/dashboard/storylist/storyupdate", element: <Storylist /> },
        { path: "/dashboard/commentlist/commentupdate", element: <Commentupdate /> },
      ],
    },
    {},
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
