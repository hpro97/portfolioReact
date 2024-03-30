// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './CSS/index.css';

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

