import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Components/HeroSection";


let router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
          {
    index: true,
    element: <Home/>,
  },
    {
      index: true,
      element: <HeroSection/>,
    },
    {
    path: "/products",
    element: <Products/>
  },
    ]
  },

  {
    path: "/footer",
    element: <Footer/>,
  },
  {
    path: "/navbar",
    element: <Navbar/>
  },


]);
export default router