import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import { AppLayoutContainer, GlobalStyle } from './styles';
import ListView from './components/ListView/ListView';
import Header from './components/Header/Header';
import Spacer from './components/Spacer';
import { useEffect } from 'react';


function App() {

  useEffect (() => {
    document.title="To do Ada"
  },[])

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
