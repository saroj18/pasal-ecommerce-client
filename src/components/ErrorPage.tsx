import { Link } from "react-router-dom";

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
          <Link
            to={"/"}
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow-md"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
