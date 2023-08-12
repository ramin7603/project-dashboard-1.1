import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              onClick={handleCloseSidebar}
              className="flex items-center gap-3 mt-4 ml-3 font-extrabold tracking-tighter dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppe</span>
            </Link>

            <Tooltip title="Menu" placement="bottom" arrow>
              <button
                type="button"
                className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden"
                onClick={() => setActiveMenu((prevMenu) => !prevMenu)}
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((links) => (
                  <NavLink
                    to={`/${links.name}`}
                    key={links.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    onClick={handleCloseSidebar}
                  >
                    {links.icon}
                    <span className="capitalize">{links.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
