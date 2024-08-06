import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = ({course}) => {
  return(
    <><h1>{course}</h1></>
  )
}

const Part = ({course, exercises}) => {
  return(
    <>
      <p> {course} {exercises}</p>
    </>
  )
}
const Content = ({content}) => {
  return(
    <>
      {content.map((element, index)=> (
        <Part key={index} course={element.course} exercises={element.exercises}/>
      ))}
    </>
  )
}

const Total = ({content}) => {
  const total = content.reduce((acc, curr) => acc + curr.exercises, 0)

  return(
    <>
       <p>Number of exercises {total}</p>
    </>
  )
}

const App = () =>{
  // const course = 'Half Stack application development'

  const course = {
    course : 'Half Stack application development',
    content : [
      {course : 'Fundamentals of React', exercises : 10},
      {course : 'Using props to pass data', exercises : 7},
      {course : 'State of a component', exercises : 14},
    ]
  }

  return (
    <div>
      <Header course={course.course}/>
      <Content content={course.content}/>
      <Total content={course.content}/>
    </div>
  )
}

export default App;
