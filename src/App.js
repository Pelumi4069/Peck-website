import { Route, Router, Routes, useRoutes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Layout from "./layout/layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
// import Footer from "./components/Footer"

function App() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
      // {
      // path: "/about",
      // element: <Layout />,
      // children: [
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
      //   {
      //     path: "/menu",
      //     element: <Menu />,
      //   },
    },
  ]);
}

export default App;
