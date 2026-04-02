import { useState, useEffect } from "react";
import { Book, FileText, Download } from "lucide-react";
import { APIResource, mockApiResponse } from "../data/resources";

export default function Resources() {
  const [resourcesByCourse, setResourcesByCourse] = useState<Record<string, APIResource[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const COLORS = [
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  ];

  useEffect(() => {
    async function fetchResources() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Use the env variable if it exists, otherwise fall back to a placeholder
        const apiUrl = import.meta.env.VITE_API_ENDPOINT || "REPLACE_WITH_ACTUAL_URL";
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data: APIResource[] = await response.json();

        const grouped = data.reduce((acc, file) => {
          const course = file.course_name || "Uncategorized";
          if (!acc[course]) {
            acc[course] = [];
          }
          acc[course].push(file);
          return acc;
        }, {} as Record<string, APIResource[]>);

        setResourcesByCourse(grouped);
      } catch (err: any) {
        console.error("Failed to fetch resources:", err);
        setError("Unable to load resources. Please check your API connection.");
        
        // Fallback to mock data for demonstration if fetch fails
        const grouped = mockApiResponse.reduce((acc, file) => {
          const course = file.course_name || "Uncategorized";
          if (!acc[course]) acc[course] = [];
          acc[course].push(file);
          return acc;
        }, {} as Record<string, APIResource[]>);
        setResourcesByCourse(grouped);
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchResources();
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Access comprehensive study materials downloaded directly from your enrolled courses.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}

        {error && !isLoading && (
          <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-300 p-4 rounded-lg mb-6 flex justify-between items-center">
            <p>{error}</p>
            <span className="text-xs opacity-75">Currently showing fallback mock data.</span>
          </div>
        )}

        {!isLoading && (
          <div className="grid gap-6">
          {Object.entries(resourcesByCourse).map(([courseName, files], index) => {
            const colorClass = COLORS[index % COLORS.length];

            return (
              <div key={courseName} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colorClass}`}>
                    <Book className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{courseName}</h2>
                </div>

                <div className="grid gap-3">
                  {files.map((file) => (
                    <a
                      key={file.id}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                            {file.display_name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {file.mime_class.toUpperCase()} • {formatSize(file.size)} • Uploaded {new Date(file.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <Download className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
}