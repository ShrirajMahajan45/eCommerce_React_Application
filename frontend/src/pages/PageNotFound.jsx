import {Link }from "react-router-dom"

const PageNotFound = () => {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg text-center">
        {/* 404 */}
        <h1 className="text-[120px] font-black leading-none text-indigo-600 sm:text-[160px]">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
          >
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
