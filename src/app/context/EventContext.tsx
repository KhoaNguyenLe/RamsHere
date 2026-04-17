import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Event, events as initialEvents } from "../data/events";

interface EventContextType {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://ramshere-data-ingestion.onrender.com/api";

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/events/`);
      if (!response.ok) throw new Error("Failed to fetch events from database.");
      
      const data: Event[] = await response.json();
      // Only set events if we actually got data back
      if (data && data.length > 0) {
        setEvents(data);
      }
    } catch (err: any) {
      console.error("API error, using mock data fallback:", err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (newEvent: Omit<Event, "id">) => {
    try {
      const response = await fetch(`${API_BASE_URL}/events/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) throw new Error("Failed to save event to database.");
      
      const savedEvent: Event = await response.json();
      setEvents((prev) => [savedEvent, ...prev]);
    } catch (err: any) {
      console.error("Failed to save event:", err.message);
      // Local fallback for UI responsiveness if API fails
      const eventWithId: Event = {
        ...newEvent,
        id: Math.random().toString(36).substring(2, 9),
      };
      setEvents((prev) => [eventWithId, ...prev]);
      throw err;
    }
  };

  return (
    <EventContext.Provider value={{ events, addEvent, isLoading, error }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}
