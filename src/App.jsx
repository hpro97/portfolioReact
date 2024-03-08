// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import Header from '../src/components/header';
import Footer from '../src/components/Footer';
import Css from '../src/CSS/index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;