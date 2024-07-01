import { createBrowserRouter } from "react-router-dom";
import RootLayout from "components/layouts/rootlayout/RootLayout";
import Home from "pages/Home";
import Booking from "pages/Booking";

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
]);

export default router;
