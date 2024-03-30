// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../src/components/Home.jsx';
import Project from '../src/componentsProject.jsx';
import Contact from '../src/componentsContact.jsx';

import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
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

