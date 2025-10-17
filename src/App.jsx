import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  RefreshCw,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-950" : "bg-slate-50"
        } flex items-center justify-center`}
      >
        <div
          className={`${
            darkMode ? "text-gray-300" : "text-slate-600"
          } text-2xl`}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-950" : "bg-slate-50"
      } flex items-center justify-center p-4 transition-colors duration-300`}
    >
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 ${
          darkMode
            ? "bg-gray-900 text-yellow-400 border-gray-800"
            : "bg-white text-slate-600 border-slate-200"
        } p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-10 border-2`}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div
        className={`${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-slate-200"
        } rounded-2xl shadow-xl border max-w-md w-full overflow-hidden transition-colors duration-300`}
      >
        {/* Header with background */}
        <div
          className={`${
            darkMode
              ? "bg-gray-800"
              : "bg-gradient-to-br from-teal-400 to-cyan-400"
          } h-32 transition-colors duration-300`}
        ></div>

        {/* Profile Picture */}
        <div className="relative px-6 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <img
              src={user.picture.large}
              alt="Profile"
              className={`w-32 h-32 rounded-full ${
                darkMode ? "border-4 border-gray-900" : "border-4 border-white"
              } shadow-lg transition-colors duration-300`}
            />
            <h2
              className={`mt-4 text-2xl font-semibold ${
                darkMode ? "text-white" : "text-slate-800"
              } transition-colors duration-300`}
            >
              {user.name.first} {user.name.last}
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-slate-500"
              } text-sm mt-1 transition-colors duration-300`}
            >
              @{user.login.username}
            </p>
          </div>

          {/* User Details */}
          <div className="mt-6 space-y-3.5">
            <div
              className={`flex items-center space-x-3 ${
                darkMode ? "text-gray-200" : "text-slate-600"
              } transition-colors duration-300 p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-slate-50"
              }`}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-teal-50"
                } p-2 rounded-lg transition-colors duration-300`}
              >
                <Mail
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-teal-600"
                  }`}
                />
              </div>
              <span className="text-sm flex-1">{user.email}</span>
            </div>

            <div
              className={`flex items-center space-x-3 ${
                darkMode ? "text-gray-200" : "text-slate-600"
              } transition-colors duration-300 p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-slate-50"
              }`}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-teal-50"
                } p-2 rounded-lg transition-colors duration-300`}
              >
                <Phone
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-teal-600"
                  }`}
                />
              </div>
              <span className="text-sm flex-1">{user.phone}</span>
            </div>

            <div
              className={`flex items-center space-x-3 ${
                darkMode ? "text-gray-200" : "text-slate-600"
              } transition-colors duration-300 p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-slate-50"
              }`}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-teal-50"
                } p-2 rounded-lg transition-colors duration-300`}
              >
                <MapPin
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-teal-600"
                  }`}
                />
              </div>
              <span className="text-sm flex-1">
                {user.location.city}, {user.location.country}
              </span>
            </div>

            <div
              className={`flex items-center space-x-3 ${
                darkMode ? "text-gray-200" : "text-slate-600"
              } transition-colors duration-300 p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-slate-50"
              }`}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-teal-50"
                } p-2 rounded-lg transition-colors duration-300`}
              >
                <Calendar
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-teal-600"
                  }`}
                />
              </div>
              <span className="text-sm flex-1">
                Born {new Date(user.dob.date).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Load New User Button */}
          <button
            onClick={fetchUser}
            className={`mt-6 w-full ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
            } py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-200 shadow-md hover:shadow-lg`}
          >
            <RefreshCw className="w-5 h-5" />
            <span>Load New User</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
