import React from "react";
import Image from "next/image";

const DivVideo: React.FC = () => {
  return (
    <div className="bg-purple-100 p-8 rounded-lg shadow-md">
      <div className="bg-purple-800 p-6 rounded-lg text-white">
        <p className="mb-4">
          Of course! Here's a short walkthrough of the steps you'll need to
          take:
        </p>
        <p className="text-blue-300 mb-4">loom.com/share/28u20923</p>
        <div className="relative w-full h-48 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full overflow-hidden">
              <Image
                src="/api/placeholder/48/48"
                alt="User"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivVideo;
