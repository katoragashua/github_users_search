import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
const Header = () => {
  const [mode, setMode] = useState(() => "light");
  return (
    <header className="header flex items-center justify-between">
      <h1 className="logo">devfinder</h1>
      <div className="mode">
        {mode === "light" && (
          <div className="flex gap-4 items-center">
            <span>DARK</span>
            <IoMoon />
          </div>
        )}
        {mode === "dark" && (
          <div className="flex gap-4 items-center">
            <span>LIGHT</span>
            <IoMdSunny />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
