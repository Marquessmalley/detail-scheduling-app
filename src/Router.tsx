import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "context/AuthProvider";
import AvailabilityProvider from "context/AvailabilityContext";
import AppointmentProvider from "context/AppointmentContext";
import DarkModeProvider from "context/DarkModeContext";
import PrivateRoute from "components/routes/PrivateRoute";
import RootLayout from "components/layouts/rootlayout/RootLayout";
import AdminLayout from "components/layouts/adminlayout/AdminLayout";
import Home from "pages/Home";
import Booking from "pages/Booking";
import Admin from "pages/admin";
import Signup from "pages/Auth/signup";
import Login from "pages/Auth/Login";
import AppointmentConfirm from "pages/Booking/AppointmentConfirm";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: (
      <DarkModeProvider>
        <RootLayout />
      </DarkModeProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/booking",
        element: (
          <AppointmentProvider>
            <Booking />
          </AppointmentProvider>
        ),
      },
      {
        path: "/booking-confirm",
        element: <AppointmentConfirm />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <AuthProvider>
        <Signup />,
      </AuthProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <AvailabilityProvider>
          <PrivateRoute>
            <DarkModeProvider>
              <AdminLayout />
            </DarkModeProvider>
          </PrivateRoute>
        </AvailabilityProvider>
      </AuthProvider>
    ),

    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
]);

export default router;
