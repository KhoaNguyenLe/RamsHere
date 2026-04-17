import { useState } from "react";
import { LogIn, User, Lock, ShieldCheck, GraduationCap } from "lucide-react";
import logo from "../../assets/ramsherelogo.png";
import { useViewContext } from "../context/ViewContext";

export default function Login() {
  const { login } = useViewContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        login("admin", "admin");
      } else if (username === "student" && password === "student") {
        login("student", "student");
      } else {
        setError("Invalid credentials. Please use 'admin/admin' or 'student/student'.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4 transition-colors duration-300 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-md z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300">
          <div className="p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 bg-orange-50 dark:bg-orange-950/30 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300 p-4 shadow-sm">
                <img src={logo} alt="RamsHere Logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">RamsHere</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">University Event Hub</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-sm"
                    placeholder="Username"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 disabled:opacity-70 shadow-lg shadow-orange-600/20"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-4">
               <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
                  <span>Quick Login Tags</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
               </div>
               <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                    <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-orange-600" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">admin / admin</span>
                  </div>
                  <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                    <GraduationCap className="w-4 h-4 mx-auto mb-1 text-green-600" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">student / student</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 animate-pulse font-medium">
          Powered by RamsHere
        </p>
      </div>
    </div>
  );
}
