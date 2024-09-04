import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({onClick, text}) => {
  return(
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const Display = ({counter}) => {
  return(
    <div>
      {counter}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return(
    <>
    <Display counter={counter}/>
    <Button onClick={increaseByOne} text="Plus"/>
    <Button onClick={decreaseByOne} text="Reduce"/>
    <Button onClick={setToZero} text="Set To Zero"/>
    </>
  )
}

export default App
