import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { Cart, Chat, Notification, UserProfile } from "./";
import avatar from "../data/avatar5.jpg";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customerFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom" arrow>
    <button
      type="button"
      onClick={() => customerFunc()}
      style={{ color }}
      className="relative p-3 text-lg rounded-full hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
        style={{ background: dotColor }}
      ></span>
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="relative flex justify-between p-2 md:ml-6 md:mr-6">
      <NavButton
        title={"Menu"}
        customerFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
        color={"blue"}
      />

      <div className="flex">
        <NavButton
          title={"Cart"}
          customerFunc={() => handleClick("cart")}
          dotColor={"#03c9d7"}
          icon={<FiShoppingCart />}
          color={currentColor}
        />

        <NavButton
          title={"Chat"}
          customerFunc={() => handleClick("chat")}
          dotColor={"#03c9d7"}
          icon={<BsChatLeft />}
          color={currentColor}
        />

        <NavButton
          title={"notification"}
          customerFunc={() => handleClick("notification")}
          dotColor={"#03c9d7"}
          icon={<RiNotification3Line />}
          color={currentColor}
        />
        <Tooltip title="profile" placement="bottom" arrow>
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="img" className="w-8 h-8 rounded-full" />
            <p>
              <span className="text-gray-400 text-14">hi, </span>{" "}
              <span className="ml-1 font-bold text-gray-400 text-14">
                Ramin
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {/* {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
