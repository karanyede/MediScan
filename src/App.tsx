import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OCRPage from './pages/OCRPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ocr" element={<OCRPage />} />
    </Routes>
  );
}

export default App;