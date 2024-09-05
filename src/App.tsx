import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import router from "Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NextUIProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </NextUIProvider>
    </>
  );
}

export default App;
