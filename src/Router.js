import { createBrowserRouter } from "react-router-dom";
import RootLayout from "components/layouts/RootLayout";
import Home from "pages/Home";
import Booking from "pages/Booking";

const router = createBrowserRouter([
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
]);

export default router;
