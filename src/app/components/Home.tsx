import { useState, useEffect } from "react";
import { events } from "../data/events";
import EventSidebar from "./EventSidebar";
import { Calendar, Clock, MapPin, Users, Tag } from "lucide-react";

export default function Home() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const liveEvents = events.filter((e) => e.type === "live");

  useEffect(() => {
    // Auto-select first live event on mount
    if (liveEvents.length > 0 && !selectedEventId) {
      setSelectedEventId(liveEvents[0].id);
    }
  }, []);

  const selectedEvent = events.find((e) => e.id === selectedEventId);

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome to RamsHere</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Your one-stop destination for university resources and events</p>
          </div>

          {/* Live Events Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Events</h2>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {liveEvents.length} happening now
            </span>
          </div>

          {/* Selected Event Detail */}
          {selectedEvent && (
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-8 mb-8 border border-orange-100 dark:border-orange-800 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-orange-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {selectedEvent.type === "live" ? "🔴 Live Now" : "📅 Upcoming"}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedEvent.title}</h3>
                  <span className="inline-block bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-sm px-3 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                    {selectedEvent.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">{selectedEvent.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Date</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {new Date(selectedEvent.date).toLocaleDateString("en-US", { 
                        weekday: "long", 
                        month: "long", 
                        day: "numeric" 
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Time</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg col-span-2">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.location}</p>
                  </div>
                </div>
                
                {selectedEvent.attendees && (
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg col-span-2">
                    <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Attendees</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.attendees} students</p>
                    </div>
                  </div>
                )}
              </div>
              
              {selectedEvent.type === "live" && (
                <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Join Event Now
                </button>
              )}
              
              {selectedEvent.type === "upcoming" && (
                <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Register for Event
                </button>
              )}
            </div>
          )}

          {/* All Live Events List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">All Live Events</h3>
            {liveEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEventId(event.id)}
                className={`w-full text-left p-6 rounded-lg border transition-all ${
                  selectedEventId === event.id
                    ? "bg-orange-50 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 shadow-md"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{event.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <EventSidebar 
        events={events} 
        selectedEventId={selectedEventId}
        onEventSelect={setSelectedEventId}
      />
    </div>
  );
}