import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
