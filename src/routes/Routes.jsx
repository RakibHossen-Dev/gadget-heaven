import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import GadgetDetails from "../pages/GadgetDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../components/BlogDetails";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadget.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadget.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("../blog.json"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("../blog.json"),
      },
      {
        path: "/gadgets/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadget.json"),
      },
    ],
  },
]);

export default routes;
