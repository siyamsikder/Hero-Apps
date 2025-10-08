import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Components/HeroSection";
import AllApps from "../Pages/AllApps";
import TrendingApps from "../Components/TrendingApps";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/TrendingApps.json").then((res) => res.json()),

      },
      {
        index: true,
        element: <HeroSection />,
      },

      {
        path: "/apps",
        element: <AllApps />,
        loader: () => fetch("/AllAplications.json").then((res) => res.json()),
      },
      // {
      //   path:"/trendingApps",
      //   element: <TrendingApps/>,

      // }
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
