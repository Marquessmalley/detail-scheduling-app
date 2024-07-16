import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import router from "Router";

function App() {
  return (
    <>
      <NextUIProvider>
        <RouterProvider router={router} />;
      </NextUIProvider>
    </>
  );
}

export default App;
