import React from "react";
import LeftSide from "./components/LeftSide";
import MiddleArea from "./components/MiddleArea";
import RightSide from "./components/RightSide";

export default function App() {
  return (
    <div className="flex  relative h-screen">
      <div className="sticky top-0 h-screen w-2/12">
        <LeftSide />
      </div>

      <div className="overflow-y-auto h-screen w-6/12">
        <MiddleArea />
      </div>
      
        <div className="sticky top-0 h-screen bg-gray-50 w-4/12">
          <RightSide />
        </div>
   
    </div>
  );
}
