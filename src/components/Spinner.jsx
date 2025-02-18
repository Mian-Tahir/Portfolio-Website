import React from "react";

const Spinner = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center  bg-white h-screen">
      <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        {/* You can add text or an icon here if needed */}
      </div>
    </div>
  );
};

export default Spinner;