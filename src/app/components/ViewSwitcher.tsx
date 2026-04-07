import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, ShieldCheck } from "lucide-react";
import { useViewContext, ViewMode } from "../context/ViewContext";

export default function ViewSwitcher() {
  const { view, setView } = useViewContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (mode: ViewMode) => {
    setView(mode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-orange-700 dark:bg-orange-900 px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors border border-orange-500/30 shadow-inner"
      >
        {view === "admin" ? (
          <>
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Admin View</span>
          </>
        ) : (
          <>
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Student View</span>
          </>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <button
            onClick={() => handleSelect("admin")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              view === "admin"
                ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Admin Mode
          </button>
          <button
            onClick={() => handleSelect("student")}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              view === "student"
                ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <User className="w-4 h-4" />
            Student Mode
          </button>
        </div>
      )}
    </div>
  );
}
