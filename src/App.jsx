import React from 'react';
import './App.css'; // Create an App.css file to import W3.CSS and other styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
const App = () => {
 
  return (
    <>
      <BrowserRouter>
   <Routes>
      <Route path='/' element={<Homepage/>} />
    </Routes>
  </BrowserRouter>,
    </>
  );
};

export default App;
