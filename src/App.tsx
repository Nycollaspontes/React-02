import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import NumberList from './components/NumberList/NumbersList';


function App() {
  return (
    <>
      <div>
        <CounterButton titlebuttonA='incrementar' titlebuttonB='decrementar' />
      </div>
      <div>
        Lista de numeros
        <NumberList />
      </div>
    </>
  )
}

export default App;
