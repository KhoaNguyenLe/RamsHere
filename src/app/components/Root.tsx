import { Outlet } from "react-router";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";
import { EventProvider } from "../context/EventContext";
import { ViewProvider } from "../context/ViewContext";

export default function Root() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
        <ViewProvider>
          <EventProvider>
            <Navbar />
            <div className="flex-1 overflow-hidden">
              <Outlet />
            </div>
          </EventProvider>
        </ViewProvider>
      </div>
    </ThemeProvider>
  );
}