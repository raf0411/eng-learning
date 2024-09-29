import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaPlay,
  FaQuestionCircle,
  FaHeadphones,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const linkSelectedStyle = ({ isActive }) =>
    isActive
      ? "flex text-[#EF8354] items-center justify-start gap-5"
      : "flex text-white items-center justify-start gap-5";
  
  const selectedBoxStyle = (isActive) =>
    isActive
      ? "h-5 w-12 -m-5 rounded-r-xl bg-[#EF8354]"
      : "h-5 w-12 -m-5 rounded-r-xl";

  return (
    <aside className="text-white bg-[#4F5D75] overflow-hidden min-w-[300px] rounded-3xl px-5 py-5 h-[98%] flex flex-col gap-10">
      <NavLink to="/" className="flex items-center justify-start gap-8">
        <img src="" alt="logo" />
        <div className="text-logo">
          <h1 className="text-5xl font-bold text-[#EF8354]">ENG-</h1>
          <h3 className="font-bold italic text-3xl">Learning</h3>
        </div>
      </NavLink>

      <nav>
        <ul className="flex flex-col gap-10">
          <li>
            <NavLink to="/" className={linkSelectedStyle}>
              {({ isActive }) => (
                  <div className="flex items-center gap-8">
                    <div className={selectedBoxStyle(isActive)}>{/* BOX */}</div>
                    <FaHome className="text-xl" />
                    <p className="text-xl font-bold">Beranda</p>
                  </div>
                )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/kursus" className={linkSelectedStyle}>
              {({ isActive }) => (
                  <div className="flex items-center gap-8">
                    <div className={selectedBoxStyle(isActive)}>{/* BOX */}</div>
                    <FaPlay className="text-xl" />
                    <p className="text-xl font-bold">Kursus</p>
                  </div>
                )}
            </NavLink>
          </li>

          <li>
            <NavLink to={"/kuis"} className={linkSelectedStyle}>
              {({ isActive }) => (
                  <div className="flex items-center gap-8">
                    <div className={selectedBoxStyle(isActive)}>{/* BOX */}</div>
                    <FaQuestionCircle className="text-xl" />
                    <p className="text-xl font-bold">Kuis</p>
                  </div>
                )}
            </NavLink>
          </li>

          <li>
            <NavLink to={"/pendengaran"} className={linkSelectedStyle}>
              {({ isActive }) => (
                  <div className="flex items-center gap-8">
                    <div className={selectedBoxStyle(isActive)}>{/* BOX */}</div>
                    <FaHeadphones className="text-xl" />
                    <p className="text-xl font-bold">Listening</p>
                  </div>
                )}
            </NavLink>
          </li>

          <li>
            <NavLink to={"/pengaturan"} className={linkSelectedStyle}>
              {({ isActive }) => (
                  <div className="flex items-center gap-8">
                    <div className={selectedBoxStyle(isActive)}>{/* BOX */}</div>
                    <FaCog className="text-xl" />
                    <p className="text-xl font-bold">Pengaturan</p>
                  </div>
                )}
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="flex items-center justify-center flex-col bg-[#2D3142] rounded-3xl gap-5 p-10 self-center w-[75%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
          alt="profile-img"
          className="w-14 rounded-full object-cover"
        />

        <h1 className="text-3xl font-bold">User</h1>
      </section>

      <button className="self-center bg-[#EF8354] rounded-full text-2xl px-10 py-2 font-semibold">
        LOGOUT
      </button>
    </aside>
  );
}

export default Sidebar;
