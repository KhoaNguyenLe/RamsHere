import { createContext, useContext, useState, ReactNode } from "react";

export type ViewMode = "student" | "admin";

interface ViewContextType {
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewMode>("admin"); // Default to admin for now as requested

  return (
    <ViewContext.Provider value={{ view, setView }}>
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
