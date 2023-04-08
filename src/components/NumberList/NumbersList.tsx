import './style.css'

const NumberList = () => {
  const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      {numbers.map((number, index) => {
        if (number % 2 > 0) {
          return (
            <li key={index}>{number}</li>
          )
        }
      })}
    </div>
  )
}

export default NumberList;