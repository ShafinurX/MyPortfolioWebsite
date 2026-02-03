import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // এখানে 'react-router-dom' নিশ্চিত করুন

import Home from './Page/Home.jsx';
import About from './Page/About.jsx'; // About ইম্পোর্ট করুন
import Projects from './Page/Projects.jsx'; // Projects ইম্পোর্ট করুন
import Contact from './Page/Contact.jsx'; // Contact ইম্পোর্ট করুন

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home আপনার মেইন লেআউট হিসেবে কাজ করবে
    children: [
      {
        path: "about", // 'localhost:5173/about' পাথে এটি দেখাবে
        element: <About />,
      },
      {
        path: "projects", // 'localhost:5173/projects' পাথে এটি দেখাবে
        element: <Projects />,
      },
      {
        path: "contact", // 'localhost:5173/contact' পাথে এটি দেখাবে
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)