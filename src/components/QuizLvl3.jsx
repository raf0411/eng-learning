import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";
import { questionsLvl3 } from "../assets/data";
import { Link } from "react-router-dom";

function QuizLvl3() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questionsLvl3[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  const ans1 = useRef(null);
  const ans2 = useRef(null);
  const ans3 = useRef(null);
  const ans4 = useRef(null);

  const answers = [ans1, ans2, ans3, ans4];

  const checkAnswer = (e, answer) => {
    if (!lock) {
      if (question.answer === answer) {
        if (e.target.classList.contains("parent")) {
          e.target.classList.add("bg-green-500");
        } else {
          e.target.parentElement.classList.add("bg-green-500");
        }
        setScore((prevScore) => prevScore + 1);
      } else {
        if (e.target.classList.contains("parent")) {
          e.target.classList.add("bg-red-500");
        } else {
          e.target.parentElement.classList.add("bg-red-500");
        }
        answers[question.answer - 1].current.classList.add("bg-green-500");
      }
      setLock(true);
    }
  };

  const goNextQuestion = () => {
    if (index == questionsLvl3.length - 1) {
      setIsEnded(true);
    }
    if (lock) {
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(questionsLvl3[index + 1]);
      setLock(false);
      answers.map((a) => {
        a.current.classList.remove("bg-red-500");
        a.current.classList.remove("bg-green-500");
      });
    }
  };

  const goPreviousQuestion = () => {
    if (index > 0 && lock) {
      setIndex((prevIndex) => prevIndex - 1);
      setQuestion(questionsLvl3[index - 1]);
      setLock(false);
    }
  };

  return (
    <div className="bg-[#4F5D75] p-10 py-5 rounded-3xl overflow-hidden h-full w-[1000px]">
      {isEnded ? (
        <div className="flex items-center justify-center flex-col font-serif mt-20 gap-7">
          <h1 className="text-8xl">Your Score</h1>
          <h1 className="text-[10rem] font-bold">{score}</h1>

          <Link to={"/kuis"} className="self-center bg-[#EF8354] rounded-full text-2xl px-10 py-2 font-semibold">
            Back To Quiz
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-[#2D3142] p-20 rounded-3xl">
            <p className="text-4xl font-serif text-center leading-tight break-words">
              {question.question}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            <button
              ref={ans1}
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
              className={`parent bg-[#EF8354] font-serif font-bold w-full h-10 flex items-center justify-between px-5 rounded-md`}
            >
              <span>A</span>
              <span>{question.option1}</span>
              <div className=" w-6 h-6"></div>
            </button>

            <button
              ref={ans2}
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
              className={`parent bg-[#EF8354] font-serif font-bold w-full h-10 flex items-center justify-between px-5 rounded-md`}
            >
              <span>B</span>
              <span>{question.option2}</span>
              <div className=" w-6 h-6"></div>
            </button>

            <button
              ref={ans3}
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
              className={`parent bg-[#EF8354] font-serif font-bold w-full h-10 flex items-center justify-between px-5 rounded-md`}
            >
              <span>C</span>
              <span>{question.option3}</span>
              <div className=" w-6 h-6"></div>
            </button>

            <button
              ref={ans4}
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
              className={`parent bg-[#EF8354] font-serif font-bold w-full h-10 flex items-center justify-between px-5 rounded-md`}
            >
              <span>D</span>
              <span>{question.option4}</span>
              <div className=" w-6 h-6"></div>
            </button>
          </div>

          <div className="flex items-center justify-between mt-10 font-serif px-3">
            <button
              onClick={() => {
                goPreviousQuestion();
              }}
              className="bg-[#EF8354] p-3 rounded-2xl"
            >
              <FaChevronLeft size={32} />
            </button>

            <p className="font-thin text-xl">
              Question {index + 1}/{questionsLvl3.length}
            </p>

            <button
              onClick={() => {
                goNextQuestion();
              }}
              className="bg-[#EF8354] p-3 rounded-2xl"
            >
              <FaChevronRight size={32} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizLvl3;
