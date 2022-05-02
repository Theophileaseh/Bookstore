import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => (
  <div className="main-container">
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </div>
);

export default App;
