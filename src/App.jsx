import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './views/landing/index.jsx'
import List from './views/list/index';
import Header from './components/layout/header.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  )
}