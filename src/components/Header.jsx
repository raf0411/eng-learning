import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={'/'} className="text-white font-bold text-5xl">
        <span className="text-[#EF8354]">ENG- </span> <span className="italic">Learning</span>
      </Link>
    </header>
  );
}

export default Header;
