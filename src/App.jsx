import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Strategy from './pages/Strategy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
