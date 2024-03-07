// src/components/footer.jsx
// git add . && git commit -m "first commit" && git push

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/index.css';

const Footer = () => {
  return (
        <footer class="py-3 my-4 bg-light">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3 blockMedia">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 textPersonal">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 textPersonal">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 textPersonal">
                Contact
              </a>
            </li>
          </ul>
          <p class="text-center textPersonalBold">© 2024 Harry Probert</p>
        </footer>
  );
};

export default Footer;
