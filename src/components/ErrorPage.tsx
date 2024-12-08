const ErrorPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow-md"
          >
            Go to Homepage
          </a>
          {/* <a
            // href="/contact"
            className="ml-4 px-6 py-2 text-blue-500 border border-blue-500 hover:bg-blue-100 rounded shadow-md"
          >
            Contact Us
          </a> */}
        </div>
        {/* <div className="mt-12">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Error Illustration"
            className="mx-auto w-80"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ErrorPage;
