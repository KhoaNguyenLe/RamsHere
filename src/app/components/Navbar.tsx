import { Link, useLocation } from "react-router";
import logo from "../../assets/ramsherelogo.png";
import ThemeToggle from "./ThemeToggle";
import ViewSwitcher from "./ViewSwitcher";
import { useViewContext } from "../context/ViewContext";

export default function Navbar() {
  const location = useLocation();

  const { view } = useViewContext();

  const allNavItems = [
    { path: "/", label: "Home" },
    { path: "/resources", label: "Resources", studentOnly: true },
    { path: "/calendar", label: "Calendar" },
    { path: "/about", label: "About Us", studentOnly: true },
    { path: "/contacts", label: "Contacts", studentOnly: true },
    { path: "/get-involved", label: "Get Involved", studentOnly: true },
    { path: "/admin", label: "Admin", adminOnly: true },
  ];

  const navItems = allNavItems.filter((item) => {
    if (view === "admin") {
      return !item.studentOnly;
    }
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
            <ViewSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}