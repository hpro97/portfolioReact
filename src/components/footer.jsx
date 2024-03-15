// src/components/footer.jsx
// git add . && git commit -m "first commit" && git push

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-3 bg-light fixed-bottom"> {/* Add 'fixed-bottom' class */}
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 blockMedia">
        <li className="nav-item">
          {/* Use Link for navigation */}
          <Link to="/" className="nav-link px-2 textPersonal">
            Home
          </Link>
        </li>
        <li className="nav-item">
          {/* Use Link for navigation */}
          <Link to="/projects" className="nav-link px-2 textPersonal">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          {/* Use Link for navigation */}
          <Link to="/contact" className="nav-link px-2 textPersonal">
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-center textPersonalBold">© 2024 Harry Probert</p>
    </footer>
  );
};

export default Footer;



//to do:
