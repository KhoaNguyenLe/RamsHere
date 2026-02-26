import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Calendar from "./components/Calendar";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import GetInvolved from "./components/GetInvolved";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "resources", Component: Resources },
      { path: "calendar", Component: Calendar },
      { path: "about", Component: AboutUs },
      { path: "contacts", Component: Contacts },
      { path: "get-involved", Component: GetInvolved },
      { path: "*", Component: NotFound },
    ],
  },
]);
