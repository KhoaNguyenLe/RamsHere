import { Book, FileText, Video, Download, ExternalLink } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      id: "1",
      title: "Study Materials",
      icon: Book,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      resources: [
        { name: "Calculus I - Complete Notes", type: "PDF", downloads: 1234 },
        { name: "Biology 101 Study Guide", type: "PDF", downloads: 892 },
        { name: "Physics Formulas Reference Sheet", type: "PDF", downloads: 756 },
        { name: "Chemistry Lab Report Templates", type: "DOCX", downloads: 543 },
      ],
    },
    {
      id: "2",
      title: "Video Tutorials",
      icon: Video,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      resources: [
        { name: "Introduction to Python Programming", type: "Video", downloads: 2145 },
        { name: "Essay Writing Masterclass", type: "Video", downloads: 1876 },
        { name: "Public Speaking Tips", type: "Video", downloads: 1234 },
        { name: "Research Methods Overview", type: "Video", downloads: 987 },
      ],
    },
    {
      id: "3",
      title: "Academic Writing",
      icon: FileText,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      resources: [
        { name: "APA Citation Style Guide", type: "PDF", downloads: 3456 },
        { name: "Thesis Writing Template", type: "DOCX", downloads: 2345 },
        { name: "Literature Review Framework", type: "PDF", downloads: 1678 },
        { name: "Academic Integrity Guidelines", type: "PDF", downloads: 1234 },
      ],
    },
    {
      id: "4",
      title: "Career Resources",
      icon: ExternalLink,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      resources: [
        { name: "Resume Templates Collection", type: "ZIP", downloads: 4567 },
        { name: "Interview Preparation Guide", type: "PDF", downloads: 3456 },
        { name: "Cover Letter Examples", type: "PDF", downloads: 2890 },
        { name: "LinkedIn Optimization Tips", type: "PDF", downloads: 2134 },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Access comprehensive study materials, guides, and tools to support your academic journey
          </p>
        </div>

        <div className="grid gap-6">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                </div>

                <div className="grid gap-3">
                  {category.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.type} • {resource.downloads.toLocaleString()} downloads
                          </p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can't find what you're looking for?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Submit a resource request and our team will do their best to add it to the collection.
          </p>
          <button className="bg-orange-600 dark:bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}