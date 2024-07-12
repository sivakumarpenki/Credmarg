import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Vendors from './pages/Vendors';
import SendEmails from './pages/SendEmails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/send-emails" element={<SendEmails />} />
      </Routes>
    </Router>
  );
}

export default App;
