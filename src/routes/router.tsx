import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import Destinations from "../pages/Destinations";
import Flights from "../pages/Flights";
import Booking from "../pages/Booking";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";


export const router = createBrowserRouter([

  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);