import React from "react";

//This is the header component in header component only company name will be printed

const Header = () => {
  return (
    <div className="h-10 bg-[#f5f5f5] flex items-center shadow-md ">
      <h3 className="mx-10">
        Content<span className="text-[#ff0000]   ">Enablers</span>
      </h3>
    </div>
  );
};

export default Header;
