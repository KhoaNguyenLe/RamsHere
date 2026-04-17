import { Link, useLocation } from "react-router";
import { LogOut } from "lucide-react";
import logo from "../../assets/ramsherelogo.png";
import ThemeToggle from "./ThemeToggle";
import { useViewContext } from "../context/ViewContext";

export default function Navbar() {
  const location = useLocation();
  const { view, logout } = useViewContext();

  const allNavItems = [
    { path: "/", label: "Home" },
    { path: "/admin", label: "Admin", adminOnly: true },
    { path: "/calendar", label: "Calendar" },
    { path: "/resources", label: "Resources", studentOnly: true },
    { path: "/about", label: "About Us", studentOnly: true },
    { path: "/contacts", label: "Contacts", studentOnly: true },
    { path: "/get-involved", label: "Get Involved", studentOnly: true },
  ];

  const navItems = allNavItems.filter((item) => {
    if (view === "admin") {
      // Admin: Admin (Add events), Home (Look at live events), Calendar
      return !item.studentOnly;
    }
    // Student: Home, Calendar, Resources, About us, Contacts, Get Involved
    return !item.adminOnly;
  });

  return (
    <nav className="bg-orange-600 dark:bg-orange-800 text-white shadow-md">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="RamsHere Logo" className="w-6 h-6 object-contain" />
            <span className="text-2xl font-bold tracking-tight">RamsHere</span>
          </Link>

          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`hover:text-orange-200 transition-colors ${location.pathname === item.path ? "border-b-2 border-white pb-1" : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-orange-700/50 hover:bg-orange-700 dark:bg-orange-900/50 dark:hover:bg-orange-900 border border-white/20 px-3 py-1.5 rounded-lg transition-all text-sm font-medium"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}