import React, { useState } from 'react';
import './App.css'; // Create an App.css file to import W3.CSS and other styles
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
const App = () => {
 
  return (
    <>
    <Routes>
      <Route path='/' element={Homepage} />
    </Routes>
    
    </>
  );
};

export default App;
