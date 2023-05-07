import Header from "./Header";
import Nav from "./Nav";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Usercontext from "./UserContext";
import { useState } from "react";
import Videos from "./Videos";

function App() {
  const [showSide, setShowSide] = useState(false);

  function ToggleSidebar() {
    setShowSide(!showSide);
  }

  return (
    //to show sidebar when clicking on how button here i have used context because here we need to update the sidebar component using button in nav
    <div className="bg-[url('https://nordicapis.com/wp-content/uploads/6-Enablers-for-Advancing-API-Governance-Maturity-1024x576.png')] bg-cover bg-no-repeat bg-center h-[100vh]">
      <Usercontext.Provider value={{ isopen: showSide, toggle: ToggleSidebar }}>
        <Header />
        <Nav />

        <Outlet />
      </Usercontext.Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/body",
        element: <Body />,
      },

      { path: "/videos", element: <Videos /> },
    ],
  },
]);
