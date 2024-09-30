import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { user } from "../assets/user";
import { quizzes } from "../assets/quizzes";
import { courses } from "../assets/courses";

function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-[#4F5D75] flex flex-col items-start rounded-3xl p-5 px-10 w-[100%] gap-8">
        <p className="font-serif text-2xl">Hi {user[0].name}!</p>
        <p className="font-serif font-bold text-justify">
          "ENG-Learning" menawarkan fitur-fitur sederhana yang mendukung proses
          pembelajaran bahasa Inggris. Terdapat pelajaran terstruktur yang
          dibagi berdasarkan level dan video-based, serta kuis interaktif untuk
          menguji pemahaman. Pengguna dapat mengakses latihan mendengar melalui
          audio untuk meningkatkan keterampilan memahami percakapan.
        </p>
        <NavLink
          to="/kursus"
          className="bg-[#EF8354] rounded-full text-xl px-10 py-2 font-semibold"
        >
          MULAI
        </NavLink>
      </div>

      <div className="flex items-start gap-16">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Kursus Tersedia</h1>

          <div className="bg-[#4F5D75] rounded-3xl px-10 py-3 flex gap-5 items-center justify-center">
            <FaGraduationCap size={48} />
            <Link to={"/kursus/1"} className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">{courses[0].name}</h1>
              <p className="font-thin text-[#BFC0C0]">
                {courses[0].topics.length} Topik <span>|</span>{" "}
                {user[0].courses[0].done}/{courses[0].topics.length}
              </p>
            </Link>
          </div>

          <div className="bg-[#4F5D75] rounded-3xl p-5 flex gap-5 items-center justify-center">
            <FaGraduationCap size={48} />
            <Link to={"/kursus/2"} className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">{courses[1].name}</h1>
              <p className="font-thin text-[#BFC0C0]">
                {courses[1].topics.length} Topik <span>|</span>{" "}
                {user[0].courses[1].done}/{courses[1].topics.length}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Skor Kamu</h1>

          <div className="bg-[#4F5D75] rounded-3xl p-5 px-10 flex flex-col gap-3 items-center justify-center">
            <h1 className="text-9xl font-bold">{user[0].score}</h1>
            <h3 className="text-2xl font-bold">Kuis</h3>

            <div className="flex items-center gap-5">
              <div>
                <h2>
                  {user[0].quizzes[0].correct}/{quizzes[0].questions.length}
                </h2>
                <p className="text-[#BFC0C0]">Level 1</p>
              </div>

              <span className="text-[#EF8354] text-5xl">|</span>

              <div>
                <h2>
                  {user[0].quizzes[1].correct}/{quizzes[1].questions.length}
                </h2>
                <p className="text-[#BFC0C0]">Level 2</p>
              </div>

              <span className="text-[#EF8354] text-5xl">|</span>

              <div>
                <h2>
                  {user[0].quizzes[2].correct}/{quizzes[2].questions.length}
                </h2>
                <p className="text-[#BFC0C0]">Level 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
