import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Components/HeroSection";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Looding...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <HeroSection />,
      },

      {
        path: "/apps",
        element: <AllApps />,
      },

      {
        path: "/installation/:id",
        element: <Installation />,
      },
    ],
  },

  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
]);
export default router;
