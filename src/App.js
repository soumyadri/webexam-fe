import './App.css';
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './Containers/Registration';
import { NavBar } from './Components/NavBar';
import { Home } from './Containers/Home';
import { Footer } from './Components/Footer';
import { Examination } from './Containers/Examination';
import { StudentPageContainer } from './Containers/StudentPageContainer';

function App() {
  return (
    <NextUIProvider>
      <div className='App'>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/examination' element={<Examination />} />
            <Route path='/student-page' element={<StudentPageContainer />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
