// src/components/footer.jsx
// git add . && git commit -m "first commit" && git push


const Footer = () => {
  return (
        <footer className="py-3 my-4 bg-light">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 blockMedia">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 textPersonal">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 textPersonal">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 textPersonal">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center textPersonalBold">© 2024 Harry Probert</p>
        </footer>
  );
};

export default Footer;

//to do:

//fix footer at bottom of page always