import { useState } from "react";
import './style.css'

export interface CounterButtonProps {
  titlebuttonA: string,
  titlebuttonB: string,
  active?: boolean;
}

const CounterButton = ({ titlebuttonA, titlebuttonB, active = false }: CounterButtonProps) => {
  const [counter, setCounter] = useState(0)

  const handleIncrementCounter = () => {
    setCounter(counter + 1)
  }
  const handleDecrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={handleIncrementCounter}>{titlebuttonA}</button>
      <button onClick={handleDecrementCounter}>{titlebuttonB}</button>
    </div>
  )
}


export default CounterButton;