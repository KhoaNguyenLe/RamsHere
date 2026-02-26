import { Event } from "../data/events";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventSidebarProps {
  events: Event[];
  selectedEventId: string | null;
  onEventSelect: (eventId: string) => void;
}

export default function EventSidebar({ events, selectedEventId, onEventSelect }: EventSidebarProps) {
  const liveEvents = events.filter((e) => e.type === "live");
  const upcomingEvents = events.filter((e) => e.type === "upcoming");

  return (
    <div className="w-80 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-6">
        {/* Live Events Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Live Now</h3>
          </div>
          <div className="space-y-3">
            {liveEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => onEventSelect(event.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedEventId === event.id
                    ? "bg-orange-50 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 shadow-sm"
                    : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-orange-200 dark:hover:border-orange-700 hover:shadow-sm"
                }`}
              >
                <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{event.title}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Users className="w-3 h-3" />
                  <span>{event.attendees} attending</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Upcoming</h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => onEventSelect(event.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedEventId === event.id
                    ? "bg-orange-50 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 shadow-sm"
                    : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-orange-200 dark:hover:border-orange-700 hover:shadow-sm"
                }`}
              >
                <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{event.title}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}