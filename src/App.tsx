import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import Header from './components/Header/Header';
import NumberList from './components/NumberList/NumbersList';
import Taskboard from './components/TaskBoard/Taskboard';
import { GlobalStyle } from './styles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Taskboard />
    </>
  )
}

export default App;
