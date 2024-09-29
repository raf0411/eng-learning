import React from "react";
import { FaLanguage } from "react-icons/fa";

function SettingsPage() {
  return (
    <div>
      <div className="bg-[#4F5D75] p-5 rounded-3xl">
        <div className="bg-[#2D3142] flex items-center justify-between w-[65rem] gap-5 p-5 px-9 rounded-3xl">
          <div className="flex items-center gap-5">
            <FaLanguage size={48} />{" "}
            <p className="text-2xl font-bold">Language</p>
          </div>

          <select name="languages" id="languages" className="bg-[#EF8354] font-bold outline-none py-3 px-5  cursor-pointer rounded-xl">
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
