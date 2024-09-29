import React from 'react'
import { NavLink } from 'react-router-dom'

function QuizPage() {
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
      {/* QUIZ 1 */}
      <div className='flex flex-col gap-5'>
        <div className='bg-[#4F5D75] rounded-3xl flex flex-col gap-8 px-24 py-12'>
          <div>
            <h1 className='text-5xl font-bold text-center'>Level 1 <br /> (Beginner)</h1>
          </div>

          <NavLink to={`/quiz-lvl-1`} className='bg-[#EF8354] rounded-full text-xl px-10 py-1 font-semibold self-center'>
            MULAI
          </NavLink>
        </div>

      </div>
      {/* QUIZ 2 */}
      <div className='flex flex-col gap-5'>
        <div className='bg-[#4F5D75] px-24 py-12 rounded-3xl flex flex-col gap-8'>
          <div>
            <h1 className='text-5xl font-bold text-center'>Level 2 <br /> (Basic)</h1>
          </div>

          <NavLink to={'/quiz-lvl-2'} className='bg-[#EF8354] rounded-full text-xl px-10 py-1 font-semibold self-center'>
            MULAI
          </NavLink>
        </div>
      </div>

      {/* QUIZ 2 */}
      <div className='flex flex-col gap-5'>
        <div className='bg-[#4F5D75] px-24 py-12 rounded-3xl flex flex-col gap-8'>
          <div>
            <h1 className='text-5xl font-bold text-center'>Level 3 <br /> (Intermediate)</h1>
          </div>

          <NavLink to={'/quiz-lvl-3'} className='bg-[#EF8354] rounded-full text-xl px-10 py-1 font-semibold self-center'>
            MULAI
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
