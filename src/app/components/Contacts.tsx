import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contacts() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@ramshere.edu",
      description: "We'll respond within 24 hours",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "(555) 123-4567",
      description: "Mon-Fri, 9:00 AM - 5:00 PM",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Student Center, Room 201",
      description: "Office hours: Mon-Fri, 10:00 AM - 4:00 PM",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
  ];

  const departments = [
    { name: "General Inquiries", email: "info@ramshere.edu" },
    { name: "Events Team", email: "events@ramshere.edu" },
    { name: "Resources Team", email: "resources@ramshere.edu" },
    { name: "Technical Support", email: "support@ramshere.edu" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a question or suggestion? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`inline-block p-3 rounded-lg ${method.color} mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-lg text-orange-600 dark:text-orange-400 font-medium mb-1">{method.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent"
                  placeholder="john@university.edu"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 dark:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Department Contacts & FAQ */}
          <div className="space-y-6">
            {/* Department Contacts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Department Contacts</h2>
              <div className="space-y-3">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{dept.name}</h3>
                      <a href={`mailto:${dept.email}`} className="text-sm text-orange-600 dark:text-orange-400 hover:underline">
                        {dept.email}
                      </a>
                    </div>
                    <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h3 className="font-bold text-gray-900 dark:text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Response Promise</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}