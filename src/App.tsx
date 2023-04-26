import { Suspense, useEffect, lazy } from 'react';
import './App.css';
import { AppLayoutContainer, GlobalStyle } from './styles';
import Spacer from './components/Spacer';
import { TaskProvider } from './context/task.context';
const Header = lazy(() => import('./components/Header/Header'));
const ListView = lazy(() => import('../src/screens/ListView/ListView'));

function App() {

  useEffect(() => {
    document.title = "To do Ada"
  }, [])

  return (
    <>
      <TaskProvider>
        <GlobalStyle />
        <Suspense fallback={<div>Carregando...</div>}>
          <AppLayoutContainer>
            <Spacer height={2} />
            <Header />
            <ListView />
          </AppLayoutContainer>
        </Suspense>
      </TaskProvider>
    </>
  )
}

export default App;
