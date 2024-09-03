import React from "react";
import Image from "next/image";

const PieFooter: React.FC = () => {
  return (
    <footer className="mt-8 py-4 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-600 hover:text-gray-800">
            <svg
              height="1em"
              viewBox="0 30 512 512"
              width="1em"
              aria-label="Loom on LinkedIn"
              className="fill-thd-color-violet-70 h-18 w-18"
            >
              <path d="M192 192h88.553v45.391h1.266C294.139 215.294 324.298 192 369.24 192 462.713 192 480 250.188 480 325.867V480h-92.305V343.361c0-32.592-.667-74.513-48.014-74.513-48.074 0-55.41 35.493-55.41 72.146V480H192zM32 192h96v288H32zM128 112c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>
            </svg>
          </a>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            © 2024, VERI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PieFooter;
