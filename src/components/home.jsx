// git add . && git commit -m "first commit" && git push

import Me from "../assets/me.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const hrSmall = {
  width: '70%',
};

const hrMed = {
  width: '67%',
};

const Home = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row g-5 py-5">
          <div className="col-lg-6">
            <h1 className="lh-1 mb-3 textPersonalMainHeader">
              Harry Marc Beard Probert
            </h1>
            <hr style={hrMed} />

            <div className="textPersonal2">
              <strong className="textPersonalHeader">About Me:</strong>
              <hr style={hrSmall} />
              <p>
                Hey, I'm Harry, a junior developer with a passion for front-end
                development and software engineering. Recently, I completed a
                rigorous Front End Web Development & UI/UX boot camp with EdX
                through the University of Birmingham, where I honed my skills in
                HTML, CSS, Bootstrap, JavaScript, jQuery, React, Node.js, ES6, and
                API usage. As an Industrial Electrician by trade, I decided to
                delve into web development to expand my skill set. Armed with a
                certificate in Front End Web Development & UI/UX, I'm eager to
                make the transition to a professional setting. In addition to my
                technical skills, I bring a unique background as an Industrial
                Electrician, TEFL Teacher, and Bilingual Spanish Speaker. This
                blend of experiences enhances my problem-solving and analytical
                abilities, making me a well-rounded developer.
              </p>
            </div>

            <div className="textPersonal2">
              <strong className="textPersonalHeader">
                Projects and Experience:
              </strong>
              <hr style={hrSmall} />
              <p>
                Through my boot camp, the course provided me with a solid
                foundation, along with hands-on experience. I've actively applied
                these skills to over 15 boot camp and personal projects (which you
                can find in the "PROJECTS" section located in the navBar or below
                in the footer), refining my abilities and gaining practical
                experience in the aforementioned and other related tools.
              </p>
            </div>

            <div className="textPersonal2">
              <strong className="textPersonalHeader">
                Ready for the Next Chapter:
              </strong>
              <hr style={hrSmall} />
              <p>
                Now armed with a solid foundation and practical experience, I'm
                eager to transition this knowledge into a professional setting.
                Opportunities in front-end development and software engineering
                are what I'm seeking, ready to contribute and continue my learning
                journey.
              </p>
            </div>

            <div className="textPersonal2">
              <strong className="textPersonalHeader">
                Interests Beyond Coding:
              </strong>
              <hr style={hrSmall} />
              <p>
                When I'm not immersed in coding, you'll find me exploring my
                interests in gaming, Traditional Tattoo Design, Electronic Music,
                and Punk. These passions fuel my creativity and add unique
                perspectives to my work.
              </p>
            </div>

            <div className="textPersonal2">
              <strong className="textPersonalHeader">Let's Connect:</strong>
              <hr style={hrSmall} />
              <p>
                If you have opportunities, collaborations, or just want to chat
                about coding, feel free to reach out. (you'll find the relevant
                information in the "CONTACT" section also located in the navBar or
                below in the footer) I'm excited about the journey ahead and eager
                to explore new challenges. Thanks for being a part of my coding
                adventure, and stay tuned for more updates on my projects and
                endeavors!
              </p>
            </div>
          </div>

          {/* Image and Badge Section */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="text-center central">
              {/* Badges */}
              <div className="padder icons">
                <FontAwesomeIcon icon={faHtml5} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                <FontAwesomeIcon icon={faBootstrap} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                <FontAwesomeIcon icon={faJs} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                <FontAwesomeIcon icon={faReact} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ margin: '1rem', padding: '1rem' }} />
                {/* Add more badges as needed */}
              </div>
              {/* Image */}
              <img
                src={Me}
                className="d-block mx-lg-auto img-fluid rounded-circle mt-3 padder"
                alt="Profile Picture"
                width="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//rework with bootstrap components