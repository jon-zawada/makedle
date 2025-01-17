import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin will-change-transform"></div>
      <div>Loading...</div>
    </div>
  );
}
