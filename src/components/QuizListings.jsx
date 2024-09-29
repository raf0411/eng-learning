import React from 'react'
import QuizListing from './QuizListing'
import { quizzes } from '../assets/quizzes'

function QuizListings() {
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
      {quizzes.map((q) => (
        <QuizListing key={q.id} quiz={q}/>
      ))}
    </div>
  )
}

export default QuizListings
