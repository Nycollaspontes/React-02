import './ListView.styles'


interface NumberListProps {
  ArrayNumbers : number[];
}

const ListView = ({ArrayNumbers}:NumberListProps) => {
  return (
    <div className='container'>
      {ArrayNumbers.map((number, index) => {
        if (number % 2 > 0) {
          return (
            <li key={index}>{number}</li>
          )
        }
        {
          return null;
        }
      })}
    </div>
  )
}

export default ListView;