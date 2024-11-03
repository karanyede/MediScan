import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OCRPage from './pages/OCRPage';

function App() {
  return (
    <Routes>
      <React>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ocr" element={<OCRPage />} />
      </React>
    </Routes>
  );
}

export default App;
