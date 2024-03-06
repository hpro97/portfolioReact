// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Harry Probert's Portfolio
        </a>
        <div className="navbar navContainer">
          <div className="nav-item active nav-item-right">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </div>
          <div className="nav-item nav-item-right">
            <a className="nav-link" href="#">
              Projects
            </a>
          </div>
          <div className="nav-item nav-item-right">
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;

//add switching and routes so that displays relevant section when navbar clicked and hides rest of sections
