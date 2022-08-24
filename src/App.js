import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={["/", "/math-magician"]} exact element={<Home />} />
        <Route path="/Calculator" exact element={<CalculatorPage />} />
        <Route path="/Quote" exact element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
