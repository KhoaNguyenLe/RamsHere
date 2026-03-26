import { createContext, useContext, useState, ReactNode } from "react";
import { Event, events as initialEvents } from "../data/events";

interface EventContextType {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (newEvent: Omit<Event, "id">) => {
    const eventWithId: Event = {
      ...newEvent,
      id: Math.random().toString(36).substring(2, 9),
    };
    setEvents((prev) => [...prev, eventWithId]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
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
