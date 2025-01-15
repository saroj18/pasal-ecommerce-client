import { WifiOff } from "lucide-react";
import { Link } from "react-router-dom";

export function NoInternetConnection() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
        <div className="flex items-center justify-center mb-4">
          <WifiOff className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          No Internet Connection
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please check your network connection and try again.
        </p>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Retry Connection
          </button>
          <a
            href="/"
            onClick={() => window.location.reload()}
            className="w-full bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Go to HomePage
          </a>
        </div>
      </div>
    </div>
  );
}
