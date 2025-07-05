import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/rooms", element: <Rooms /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
