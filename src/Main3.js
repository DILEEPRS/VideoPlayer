import React from "react";
import Videos from "./Videos";
import { data } from "./Const";

const Main3 = () => {
  const items1 = data[0].tabs[0].list[2].items;

  return (
    <div className="w-[80%] flex">
      {items1.map((ele) => {
        return <Videos {...ele} />;
      })}
    </div>
  );
};

export default Main3;
