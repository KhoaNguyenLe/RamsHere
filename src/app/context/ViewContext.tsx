import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type ViewMode = "student" | "admin";

interface ViewContextType {
  view: ViewMode;
  setView: (view: ViewMode) => void;
  isAuthenticated: boolean;
  login: (username: string, role: ViewMode) => void;
  logout: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setViewState] = useState<ViewMode>(() => {
    return (localStorage.getItem("ramshere_view") as ViewMode) || "student";
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("ramshere_auth") === "true";
  });

  const setView = (newView: ViewMode) => {
    setViewState(newView);
    localStorage.setItem("ramshere_view", newView);
  };

  const login = (_username: string, role: ViewMode) => {
    setIsAuthenticated(true);
    setView(role);
    localStorage.setItem("ramshere_auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("ramshere_auth");
    localStorage.removeItem("ramshere_view");
  };

  return (
    <ViewContext.Provider value={{ view, setView, isAuthenticated, login, logout }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useViewContext() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
}
