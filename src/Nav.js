import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Usercontext from "./UserContext";

//In nav component it will display the navigation buttons

const Nav = () => {
  const { toggle } = useContext(Usercontext);

  return (
    <div className="h-10 bg-[#f5f5f5] flex items-center border-t-2 border-[#E8E8E8] ">
      <ul className="flex text-[#adabab] items center ">
        <li className="ml-[2rem] hover:bg-[#ff0000]  hover:text-white">
          Introduction
        </li>

        <Link to="/body">
          <li
            onClick={toggle}
            className="ml-[2rem]  hover:bg-[#ff0000]  hover:text-white"
          >
            Who
          </li>
        </Link>
        <li className="ml-[2rem]  hover:bg-[#ff0000] hover:text-white">What</li>
        <li className="ml-[2rem] hover:bg-[#ff0000]  hover:text-white ">How</li>
        <li className="ml-[2rem] hover:bg-[#ff0000]  hover:text-white">
          Training Summary
        </li>
      </ul>
    </div>
  );
};

export default Nav;
