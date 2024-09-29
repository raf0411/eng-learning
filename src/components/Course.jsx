import React, { useState } from "react";
import ReactPlayer from "react-player";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { courses } from "../assets/courses";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Course() {
  const [index, setIndex] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const { id } = useParams();
  const course = courses.filter((c) => c.id == id);
  const courseJSON = course[0];

  const goNext = () => {
    if (index == courseJSON.topics.length - 1) {
      setIsEnded(true);
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#4F5D75] py-3 px-32 rounded-3xl">
        <ReactPlayer
          url={`${courseJSON.topics[index].link}`}
          width={800}
          height={400}
          controls
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold">TOPIC:</h1>
        <p className="text-xl mt-2 font-serif">
          {courseJSON.topics[index].name}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            goPrev();
          }}
          className="bg-[#EF8354] p-3 rounded-2xl"
        >
          <FaChevronLeft size={32} />
        </button>

        <p className="font-thin text-xl">
          <span className="font-bold">{courseJSON.name}</span> | Topics {index + 1}/{courseJSON.topics.length}
        </p>

        <button
          onClick={() => {
            goNext();
          }}
          className="bg-[#EF8354] p-3 rounded-2xl"
        >
          <FaChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default Course;
