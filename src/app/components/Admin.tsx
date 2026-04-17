import { useState } from "react";
import { useEventContext } from "../context/EventContext";
import { Upload, Calendar, Clock, MapPin, Tag, Image as ImageIcon, ShieldAlert } from "lucide-react";
import { useViewContext } from "../context/ViewContext";
import { Link } from "react-router";

export default function Admin() {
  const { addEvent } = useEventContext();
  const { view } = useViewContext();
  const [successMessage, setSuccessMessage] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    type: "upcoming" as "upcoming" | "live",
    category: "General",
    photo: "",
    majorTags: "All Majors",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse tags to array
    const tagsArray = formData.majorTags.split(",").map(tag => tag.trim()).filter(Boolean);
    
    addEvent({
      ...formData,
      majorTags: tagsArray,
    });
    
    setSuccessMessage("Event created successfully!");
    
    // Reset form
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      type: "upcoming",
      category: "General",
      photo: "",
      majorTags: "All Majors",
    });
    
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (view === "student") {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-10 text-center">
          <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Restricted</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This page is only accessible in **Admin View**. Please use the switcher in the navigation bar to change perspectives.
          </p>
          <Link
            to="/"
            className="inline-block w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-orange-500/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Create and manage university events and resources
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Event</h2>
          
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="e.g. Engineering Career Fair"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Time
                </label>
                <input
                  type="text"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                  placeholder="e.g. 10:00 AM - 2:00 PM"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="e.g. Student Union Center"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none"
                placeholder="Describe the event details..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Photo URL
              </label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Major Tags (comma separated)
              </label>
              <input
                type="text"
                name="majorTags"
                value={formData.majorTags}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="e.g. Computer Science, Electrical Engineering, All Majors"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Event Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                >
                  <option value="General">General</option>
                  <option value="Academic">Academic</option>
                  <option value="Career Development">Career Development</option>
                  <option value="Technology">Technology</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live Now</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
