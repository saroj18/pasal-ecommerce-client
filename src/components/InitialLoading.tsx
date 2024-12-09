export default function InitialLoadingPage() {
  return (
    <div className="h-screen fixed left-0 top-0 overflow-hidden w-full z-20 flex flex-col items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="mb-8">
        <svg
          className="w-24 h-24 text-purple-600 pulsate"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="text-2xl font-semibold text-gray-700 mb-2">
        Loading your shop
      </div>
      <div className="text-gray-500">
        Please wait while we prepare your amazing deals
        <span className="loading-dots">...</span>
      </div>
    </div>
  );
}
