import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props);
  
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}!</p>
    </div>
  )
}


const App = () => {
  const name = "Alondra"
  const age = 13
  const people = ["Cleo", "Muchacho"]
  return (
    <>
      <div>
        <p>Greetings</p>
        <Hello name="Mariano" age={10}/>
        <Hello name={name} age={age}/>
        <p>{people}</p>
      </div>
    </>
  )
}

export default App
