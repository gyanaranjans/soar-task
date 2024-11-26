"use client";
import * as React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-700">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-slate-500">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
