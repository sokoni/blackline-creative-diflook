import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Strategy from './pages/Strategy';
import Creativity from './pages/Creativity';
import CaseStudy from './pages/CaseStudy';
import Work from './pages/Work';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/creativity" element={<Creativity />} />
        <Route path="/work" element={<Work />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
