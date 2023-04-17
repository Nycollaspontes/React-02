import { useState } from 'react';
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import { GlobalStyle } from './styles';
import ListView from './components/ListView/ListView';


function App() {
  const [ArrayNumbers , SetArrayNumbers] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <>
      <GlobalStyle />
      <ListView  />
    </>
  )
}

export default App;
