// src/components/gallery.jsx

// git add . && git commit -m "first commit" && git push

import React from 'react';

const Gallery = () => {
  const projects = [
    {
      name: "Team Profile Generator",
      image: "src/assets/teamGen.png",
      description: "Command line prompts user for input and generates a team profile",
      learned: "i learned more about npm, jest, test driven devlopement, using the command line and more",
      techUsed: "Jest, Node.js, json, javascript, html, css",
      deployedLink: "https://hpro97.github.io/TeamProfileGen/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/TeamProfileGen", // Replace "#" with actual GitHub link
    },
    {
      name: "Readme Generator",
      image: "src/assets/image1.jpg",
      description: "Command line prompts user for input and generates a team profile",
      learned: "i learned more about npm, jest, test driven devlopement, using the command line and more",
      techUsed: "Jest, Node.js, json, javascript, html, css",
      deployedLink: "#", // Replace "#" with actual deployed link
      githubLink: "#", // Replace "#" with actual GitHub link
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={project.image} className="d-block w-100" alt={project.name} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <p>{project.learned}</p>
            <p>{project.techUsed}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed Link
            </a>
            <br />
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Gallery;



// add project cards that rotate when next button clicked (display 3 each on desktop and 1 on mobile, meaning media query for this)
// add pic for each

// add name for each

// add description for each
// add what i liked
// add what i found challenging
// add what i learned

// add tech used for each

// add link for each deployed
// add link for each github