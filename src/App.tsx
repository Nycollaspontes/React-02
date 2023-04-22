import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import { AppLayoutContainer, GlobalStyle } from './styles';
import ListView from './components/ListView/ListView';
import Header from './components/Header/Header';
import Spacer from './components/Spacer';


function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayoutContainer>
        <Spacer height={2} />
        <Header />
        <ListView />
      </AppLayoutContainer>
    </>
  )
}

export default App;
