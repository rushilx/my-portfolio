"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-lg">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}