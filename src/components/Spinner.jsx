// components/Spinner.jsx
import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative flex items-center justify-center h-20 w-20"> 
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 flex items-center justify-start h-full w-full`}
          style={{ transform: `rotate(${index * 45}deg)` }}
        >
          <div
            className="h-[25%] w-[25%] rounded-full bg-blue-400 opacity-50" 
            style={{
              animation: 'pulse0112 0.9s ease-in-out infinite',
              animationDelay: `${index * -0.1125}s`,
              boxShadow: '0 0 10px rgba(18, 31, 53, 0.3)',
            }}
          ></div>
        </div>
      ))}
      {/* Inline Keyframe animation */}
      <style jsx>{`
        @keyframes pulse0112 {
          0%,
          100% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  </div>
);

export default Spinner;
