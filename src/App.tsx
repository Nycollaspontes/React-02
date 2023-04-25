import './App.css';
import { AppLayoutContainer, GlobalStyle } from './styles';
import Header from './components/Header/Header';
import Spacer from './components/Spacer';
import { useEffect } from 'react';
import { TaskProvider } from './context/task.context';
import ListView from './screens/ListView/ListView';


function App() {

  useEffect(() => {
    document.title = "To do Ada"
  }, [])

  return (
    <>
      <TaskProvider>
        <GlobalStyle />
        <AppLayoutContainer>
          <Spacer height={2} />
          <Header />
          <ListView />
        </AppLayoutContainer>
      </TaskProvider>
    </>
  )
}

export default App;
