import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white w-[20%]  flex flex-col">
      <span className="bg-white  p-5 h-[120px] border border-gray-400 ">
        <h1 className="font-bold">Concepts</h1>

        <p>The key learning areas in this section.</p>
      </span>

      <span className="bg-white  p-5 h-[120px] border border-gray-400 ">
        <h1 className="font-bold">Scenarios</h1>

        <p>Potential situations that you might face.</p>
      </span>
      <span className="bg-white  p-5 h-[120px] border border-gray-400 ">
        <h1 className="font-bold">Resources</h1>

        <p>All instructional information to download and use.</p>
      </span>
    </div>
  );
};

export default Sidebar;
