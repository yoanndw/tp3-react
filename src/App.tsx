import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BeerList } from './components/BeerList';
import { About } from './About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
