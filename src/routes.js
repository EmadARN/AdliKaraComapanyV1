import React from "react";
import Home from "./pages/Home/Home";
import About1 from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/login/login";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About1 /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Login", element: <Login /> },
];

export default routes;
