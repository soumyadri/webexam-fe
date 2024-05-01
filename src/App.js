import './App.css';
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './Containers/Registration';
import { NavBar } from './Containers/NavBar';
import { Home } from './Containers/Home';

function App() {
  return (
    <NextUIProvider>
      <div className='App'>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NextUIProvider>
  );
}

export default App;
