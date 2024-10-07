import React from "react";

function SuspenseLoading({ message = "Loading...", size = "large" }) {
  const sizes = {
    small: "w-8 h-8 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-16 h-16 border-8",
  };

  const spinnerSize = sizes[size] || sizes.large;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`flex items-center justify-center ${spinnerSize} border-t-4 border-[#074163] rounded-full animate-spin`}
      ></div>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 animate-pulse">
        {message}
      </p>
    </div>
  );
}

export default SuspenseLoading;
