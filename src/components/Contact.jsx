// src/components/contact.jsx

// git add . && git commit -m "first commit" && git push

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="py-2">
      <h1 className="textPersonalMainHeader pt-2">Contact Me</h1>{" "}
      <hr className="w-75" />
      <div className="container">
        <div className="row">
          {/* Email */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title">Email</h5>
                <p className="card-text">
                  <a href="mailto:haxmo25@gmail.com">haxmo25@gmail.com</a>
                </p>
                <a href="mailto:haxmo25@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>
              </div>
            </div>
          </div>

          {/* Phone/Whatsapp */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title">Phone/Whatsapp</h5>
                <p className="card-text">
                  <a href="tel:+447874623689">+44/0 7874623689</a>
                </p>
                <a href="tel:+447874623689">
                  <FontAwesomeIcon icon={faPhoneAlt} size="3x" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  <a href="https://www.linkedin.com/in/harryprobert/">
                    https://www.linkedin.com/in/harryprobert/
                  </a>
                </p>
                <a href="https://www.linkedin.com/in/harryprobert/">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  <a href="https://github.com/hpro97">
                    https://github.com/hpro97
                  </a>
                </p>
                <a href="https://github.com/hpro97">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title">My CV</h5>
                <div className="text-center">
                  <a href="src\assets\Entry Level Programmer.pdf">
                    <FontAwesomeIcon icon={faFile} size="3x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerFixer">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
