import React from "react";
import { NavLink } from "react-router-dom";

function QuizListing({quiz}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#4F5D75] rounded-3xl flex flex-col gap-8 px-24 py-12">
        <div>
          <h1 className="text-5xl font-bold text-center">
            {quiz.name} <br /> ({quiz.type})
          </h1>
        </div>

        <NavLink
          to={`/kuis/${quiz.id}`}
          className="bg-[#EF8354] rounded-full text-xl px-10 py-1 font-semibold self-center"
        >
          MULAI
        </NavLink>
      </div>
    </div>
  );
}

export default QuizListing;
