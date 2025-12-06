import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Password } from './pages/Password/Password';
import { Video } from './pages/Video/Video';
import { Gallery } from './pages/Gallery/Gallery';
import { LoveConfetti } from './components/LoveConfetti';

function App() {
  return (
    <Router>
      <LoveConfetti />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/video" element={<Video />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
