import { Outlet } from "react-router";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}