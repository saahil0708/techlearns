import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/layout";
import Home from "@/pages/Home";
import CourseDetail from "@/pages/CourseDetail";
import Programs from "@/pages/Programs";
import WhyTechLearns from "@/pages/WhyTechLearns";
import Placements from "@/pages/Placements";
import Campus from "@/pages/Campus";
import About from "@/pages/About";
import Apply from "@/pages/Apply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/program/:slug",
        element: <CourseDetail />,
      },
      {
        path: "/why-techlearns",
        element: <WhyTechLearns />,
      },
      {
        path: "/placements",
        element: <Placements />,
      },
      {
        path: "/campus",
        element: <Campus />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/apply",
        element: <Apply />,
      }
    ]
  }
]);
