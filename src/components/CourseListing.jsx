import React from "react";
import { NavLink } from "react-router-dom";

function CourseListing({course}) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">{course.name}</h1>
      <div className="bg-[#4F5D75] p-5 px-10 rounded-3xl flex flex-col gap-3 w-[1/2]">
        <div>
          <h3 className="font-serif font-bold">OBJECTIVE:</h3>
          <p className="font-serif text-justify">{course.objective}</p>
        </div>

        <div>
          <h3 className="font-serif font-bold">TOPIC:</h3>
          <p className="font-serif text-justify">{course.topic}</p>
        </div>

        <NavLink
          to={`/kursus/${course.id}`}
          className="bg-[#EF8354] rounded-full text-xl px-10 py-1 font-semibold self-center"
        >
          MULAI
        </NavLink>
      </div>
    </div>
  );
}

export default CourseListing;
