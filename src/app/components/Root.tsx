import { Outlet } from "react-router";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";
import Login from "./Login";
import { EventProvider } from "../context/EventContext";
import { ViewProvider, useViewContext } from "../context/ViewContext";

function AppContent() {
  const { isAuthenticated } = useViewContext();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ViewProvider>
        <EventProvider>
          <AppContent />
        </EventProvider>
      </ViewProvider>
    </ThemeProvider>
  );
}