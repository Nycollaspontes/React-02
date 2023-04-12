import { useState } from "react";
import './style.css'

export interface CounterButtonProps {
  title: string,
  active?: boolean;
}

const CounterButton = ({ title, active = false }: CounterButtonProps) => {
  const [counter, setCounter] = useState(0)

  const handleIncrementCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={handleIncrementCounter}>{title}</button>
    </div>
  )
}


export default CounterButton;