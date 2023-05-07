import React from "react";
import ReactPlayer from "react-player/youtube";

// this is videos component it will displays the data comming from parent component main using props .

const Videos = ({ title }) => {
  return (
    <div className="text-white w-[200px] h-[180px] m-[4px] bg-black   border-2 border-slate-500">
      <div className="w-[100%] h-[70%]   bg-[url('https://media.licdn.com/dms/image/C4E0BAQFl---3i8m1_A/company-logo_200_200/0/1545677047630?e=2147483647&v=beta&t=ZQs19eO0Regm_60eDCjNw2Wfl283oTgd01gDCM8dHr4')] bg-cover bg-no-repeat bg-center">
        {/* Here i have used react player to play the videos and added controls to them since I dint have any video api to bring videos i have used youtube sample video */}
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          volume
          url="https://www.youtube.com/watch?v=BddP6PYo2gs"
        />
      </div>
      <p className=" w-full text-sm">{title}</p>
    </div>
  );
};

export default Videos;
