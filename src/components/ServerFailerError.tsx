import { RefreshCw } from "lucide-react";

export default function ServerFailerError() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen  fixed left-0 top-0 overflow-hidden w-full z-20 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 p-4">
      <div className="text-center">
        <div className="mb-8 relative">
          <svg
            className="w-32 h-32 text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">500</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Server Error
        </h1>

        <p className="text-xl text-red-500 font-semibold  mb-8">
          Sometimes it happened due to take some time for server start.
        </p>
        <button
          onClick={handleRefresh}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Refresh Page
        </button>
      </div>
      <div className="mt-12 text-gray-500">
        If the problem persists, please contact our support team.
      </div>
    </div>
  );
}
