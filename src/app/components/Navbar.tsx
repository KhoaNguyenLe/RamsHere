import { Link, useLocation } from "react-router";
import { GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resources", label: "Resources" },
    { path: "/calendar", label: "Calendar" },
    { path: "/about", label: "About Us" },
    { path: "/contacts", label: "Contacts" },
    { path: "/get-involved", label: "Get Involved" },
  ];

  return (
    <nav className="bg-orange-600 dark:bg-orange-800 text-white shadow-md">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="w-8 h-8" />
            <span className="text-xl font-semibold">RamsHere</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`hover:text-orange-200 transition-colors ${
                      location.pathname === item.path ? "border-b-2 border-white pb-1" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}