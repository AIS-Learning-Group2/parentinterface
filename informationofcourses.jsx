import React from 'react';
import './styles.css';

const informationofcourses = () => {
  const courses = [
    {
      title: 'O/L Mathematics',
      color: '#f0e6ff',
      lessons: [
        { title: 'Lesson 01 : Introduction To Geometry' },
        { title: 'Lesson 02: Set Theory' },
        { title: 'Lesson 03 : Theory Of Algebra' },
      ],
    },
    {
      title: 'O/L Science',
      color: '#e6f7ff',
      lessons: [
        { title: 'Lesson 01: Fundamentals of Chemistry' },
        { title: 'Lesson 02: Fundamentals of Physics' },
        { title: 'Lesson 03: Introduction To Human Brain' },
      ],
    },
    {
      title: 'O/L ICT',
      color: '#e6ffe6',
      lessons: [
        { title: 'Lesson 01 : Introduction To ICT' },
        { title: 'Lesson 02 : Computer Generations' },
      ],
    },
    {
      title: 'A/L Mathematics Stream',
      color: '#ffffe6',
      lessons: [
        { title: 'Lesson 01 : Combined Mathematics - Calculus' },
        { title: 'Lesson 02 : Physics -Thermodynamics' },
        { title: 'Lesson 03 : Organic Chemistry' },
      ],
    },
    {
      title: 'A/L Biology',
      color: '#fff5e6',
      lessons: [
        { title: 'Lesson 01 : Biology - Genetics' },
        { title: 'Lesson 02 : Physics -Thermodynamics' },
        { title: 'Lesson 03 : Organic Chemistry' },
      ],
    },
    {
      title: 'A/L ICT',
      color: '#ffe6e6',
      lessons: [
        { title: 'Lesson 01 : Computer Algorithms' },
        { title: 'Lesson 02 : Database Management System (DBMS)' },
      ],
    },
    {
      title: 'Undergraduate Level',
      color: '#ffe6e6',
      lessons: [
        {
          title: 'Botanical Science',
          lessons: [
            { title: 'Lesson 01:  Fundamentals of Botanical Science' },
            { title: 'Lesson 02 : Plant Physiology' },
          ],
        },
        {
          title: 'Pure Mathematics',
          lessons: [
            { title: 'Lesson01 : Discrete Mathematics' },
            { title: 'Lesson 2 :  Matrix Algebra' },
          ],
        },
        {
          title: 'Computer Science',
          lessons: [
            { title: 'Lesson 01 : Computer Networking' },
            { title: 'Lesson 02 : Object-Oriented Programming (OOP)' },
          ],
        },
      ],
    },
    {
      title: 'ශිෂ්‍යත්වය',
      color: '#ffe6f7',
      lessons: [
        { title: 'පාඩම 01 : ඉලක්කගත ගණිත ගැටලු' },
        { title: 'පාඩම 02 : ආදර්ශ ගැටලු' },
      ],
    },
  ];

  return (
    <div className="information-of-courses-container">
      <h1 className="information-of-courses-heading">Information of Courseses</h1>
      <div className="information-of-courses">
        {courses.map((course, index) => (
          <div key={index} className="course" style={{ backgroundColor: course.color }}>
            <div className="course-title">{course.title}</div>
            <div className="lessons">
              {course.lessons.map((lesson, index) => (
                <div key={index} className="lesson">{lesson.title}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default informationofcourses;
