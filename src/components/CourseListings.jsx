import React from 'react';
import CourseListing from './CourseListing';
import { courses } from '../assets/courses';

function CourseListings() {
  return (
    <div className='grid grid-cols-2 gap-5'>
      {courses.map((course) => (
        <CourseListing key={course.id} course={course}/>
      ))}
    </div>
  )
}

export default CourseListings
