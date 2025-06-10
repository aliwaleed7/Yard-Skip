import React from "react";

interface BottomBarProps {
  price: number;
  size: number;
}

const BottomBar: React.FC<BottomBarProps> = ({ price, size }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white px-6 py-2 shadow-lg z-50">
      {/* Info message at the top */}
      <p className="text-xs text-gray-300 mb-1">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>

      {/* Main content: Two divs inside the main wrapper */}
      <div className="flex justify-between items-center">
        {/* Left side: Yard size and price */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-lg font-semibold">{size} Yard Skip</span>
          <span className="text-xl font-bold text-blue-500 sm:ml-4">
            £{price}
          </span>
        </div>

        {/* Right side: Buttons */}
        <div className="flex gap-3">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
            Back
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
