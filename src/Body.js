import Sidebar from "./Sidebar";
import Main from "./Main";
import Main2 from "./Main2";
import Main3 from "./Main3";
import { useContext } from "react";
import Usercontext from "./UserContext";

// body contains two divisions one is sidebar and another is main division to display videos
// onclicking how button side bar will display

const Body = () => {
  const { isopen } = useContext(Usercontext);

  return (
    <div className="bg-[url('https://nordicapis.com/wp-content/uploads/6-Enablers-for-Advancing-API-Governance-Maturity-1024x576.png')] bg-cover bg-no-repeat bg-center h-[80vh]  flex">
      {isopen && <Sidebar />}
      <div className="flex flex-col">
        <Main />

        <Main2 />
        <Main3 />
      </div>
    </div>
  );
};

export default Body;
