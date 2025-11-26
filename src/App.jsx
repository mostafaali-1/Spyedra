import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
    </div>
  );
}

export default App;
