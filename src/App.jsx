import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './views/landing/index.jsx'
import List from './views/list/index';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  )
}