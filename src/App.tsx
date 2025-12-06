import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '/pages/Home/Home';
import { Password } from '/pages/Password/Password';
import { Video } from '/pages/Video/Video';
import { Gallery } from '/pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <Routes>

        {/* HALAMAN PERTAMA = WHATSAPP CHAT */}
        <Route path="/" element={<Home />} />

        {/* Password */}
        <Route path="/password" element={<Password />} />

        {/* Video */}
        <Route path="/video" element={<Video />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Redirect fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
