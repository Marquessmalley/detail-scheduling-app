import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "context/AuthProvider";
import AvailabilityProvider from "context/AvailabilityContext";
import AppointmentProvider from "context/AppointmentContext";
import DarkModeProvider from "context/DarkModeContext";
import PrivateRoute from "components/routes/PrivateRoute";
import RootLayout from "components/layouts/rootlayout/RootLayout";
import AdminLayout from "components/layouts/adminlayout/AdminLayout";
import Home from "pages/home";
import Booking from "pages/booking";
import AdminPage from "pages/admin";
import Signup from "pages/auth/signup";
import Login from "pages/auth/login";
import AppointmentConfirm from "pages/booking/AppointmentConfirm";

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
            <AdminLayout />
          </PrivateRoute>
        </AvailabilityProvider>
      </AuthProvider>
    ),

    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
