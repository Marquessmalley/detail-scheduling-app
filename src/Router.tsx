import { createBrowserRouter } from "react-router-dom";
import RootLayout from "components/layouts/rootlayout/RootLayout";
import AdminLayout from "components/layouts/adminlayout/AdminLayout";
import Home from "pages/home";
import Booking from "pages/booking";
import Signup from "pages/auth/signup";
import Login from "pages/auth/login";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [],
  },
]);

export default router;
