// git add . && git commit -m "first commit" && git push

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Harry Probert's Portfolio
        </Link>
        <div className={`navbar navContainer ${isMenuOpen ? 'blockMedia' : ''}`}>
          <div className="nav-item active nav-item-right">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </div>
          <div className="nav-item nav-item-right">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </div>
          <div className="nav-item nav-item-right">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
