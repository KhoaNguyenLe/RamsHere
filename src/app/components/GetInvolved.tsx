import { Users, Calendar, BookOpen, Megaphone, Heart, Code } from "lucide-react";

export default function GetInvolved() {
  const opportunities = [
    {
      icon: Users,
      title: "Join Our Team",
      description: "Become a volunteer coordinator and help organize events, manage resources, and build our community.",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      action: "Apply Now",
    },
    {
      icon: Calendar,
      title: "Host an Event",
      description: "Have an idea for a workshop, seminar, or social event? We'll help you bring it to life and promote it to students.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      action: "Submit Proposal",
    },
    {
      icon: BookOpen,
      title: "Contribute Resources",
      description: "Share your study materials, guides, or tutorials with fellow students. Help others succeed in their academic journey.",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      action: "Upload Resources",
    },
    {
      icon: Megaphone,
      title: "Become an Ambassador",
      description: "Represent RamsHere at your faculty or department. Help spread the word and gather feedback from students.",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      action: "Sign Up",
    },
    {
      icon: Code,
      title: "Tech Contributors",
      description: "Help us improve our platform! We're looking for developers, designers, and UX enthusiasts to enhance the student experience.",
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      action: "View Projects",
    },
    {
      icon: Heart,
      title: "Peer Mentorship",
      description: "Support incoming students by sharing your experiences and helping them navigate university life.",
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
      action: "Become a Mentor",
    },
  ];

  const benefits = [
    "Gain leadership and organizational experience",
    "Network with students and faculty across campus",
    "Build your resume with meaningful volunteer work",
    "Make a real impact on student life",
    "Receive volunteer hours certification",
    "Access to exclusive volunteer events and workshops",
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Get Involved</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Make a difference in the student community and develop valuable skills
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-900 rounded-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Why Get Involved?</h2>
          <p className="text-xl mb-6 text-orange-50">
            RamsHere is powered by students, for students. Your contribution helps create a thriving community where everyone can succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-orange-100">Active Volunteers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">1,200+</div>
              <div className="text-orange-100">Hours Contributed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-orange-100">Student Events</div>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Opportunities to Contribute</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className={`inline-block p-3 rounded-lg ${opportunity.color} mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{opportunity.description}</p>
                <button className="w-full bg-orange-600 dark:bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors">
                  {opportunity.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Volunteer Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Process */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Get Started</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Choose Your Role</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Select the opportunity that best matches your interests and skills.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Submit Application</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fill out a quick form telling us about yourself and your availability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Attend Orientation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Join an onboarding session to learn about our processes and meet the team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Start Contributing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Begin making an impact and helping fellow students succeed!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-8 border border-orange-200 dark:border-orange-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join hundreds of students who are already contributing to our community. Whether you have 2 hours a week or 10, there's a place for you at RamsHere.
          </p>
          <button className="bg-orange-600 dark:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors">
            Start Your Application
          </button>
        </div>
      </div>
    </div>
  );
}