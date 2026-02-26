import { Target, Users, Heart, Trophy } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower university students with comprehensive resources, foster community engagement, and facilitate academic and personal growth.",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community. Our platform connects students, creating opportunities for collaboration and mutual support.",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      icon: Heart,
      title: "Student Well-being",
      description: "Beyond academics, we prioritize mental health, wellness, and work-life balance through curated events and resources.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for excellence in everything we do, constantly updating our platform with the best resources and opportunities.",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & Director", department: "Computer Science" },
    { name: "Michael Chen", role: "Events Coordinator", department: "Business Administration" },
    { name: "Emily Rodriguez", role: "Resources Manager", department: "Education" },
    { name: "David Kim", role: "Technology Lead", department: "Engineering" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Dedicated to enhancing the university experience for every student
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              RamsHere was founded in 2024 by a group of passionate students who recognized the need for a centralized platform where university students could access resources, discover events, and connect with their community.
            </p>
            <p>
              What started as a simple website with a few study guides has grown into a comprehensive platform serving thousands of students. We've compiled resources across all disciplines, organized hundreds of events, and created a thriving community of learners.
            </p>
            <p>
              Today, RamsHere continues to evolve based on student feedback and needs. Our volunteer team works tirelessly to ensure that every student has access to the tools and opportunities they need to succeed academically and personally.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`inline-block p-3 rounded-lg ${value.color} mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{member.department}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">5,000+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Students</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Resources</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-400">Events per Year</div>
          </div>
        </div>
      </div>
    </div>
  );
}