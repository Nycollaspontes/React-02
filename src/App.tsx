import { Suspense, useEffect, lazy } from 'react';
import './App.css';
import { AppLayoutContainer, GlobalStyle } from './styles';
import { TaskProvider } from './context/task.context';
import Register from './screens/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRegisterData } from './screens/Register/Register.types';
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
            <Router>
              <Routes>
                <Route path='/' element={<Register onSubmit={function handleSubmit(data: IRegisterData): void { }} />} />
                <Route path="/listview" element={<ListView />} />
              </Routes>
            </Router>
          </AppLayoutContainer>
        </Suspense>
      </TaskProvider>
    </>
  )
}

export default App;
