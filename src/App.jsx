// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import '../src/CSS/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
