import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 px-6">
      {/* Soft floating background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-300 opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-yellow-300 opacity-10 rounded-full blur-2xl"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundSize: '20px 20px',
            backgroundImage:
              'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text animate-pulse mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t seem to exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
