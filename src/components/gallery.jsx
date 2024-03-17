// src/components/gallery.jsx

// git add . && git commit -m "first commit" && git push

import React from 'react';

const Gallery = () => {
  const projects = [
    {
      name: "Project 1",
      image: "src/assets/image1.jpg",
      description: "Description for Project 1",
      likes: "Likes for Project 1",
      challenges: "Challenges for Project 1",
      learned: "What I learned from Project 1",
      techUsed: "Technologies used for Project 1",
      deployedLink: "#", // Replace "#" with actual deployed link
      githubLink: "#", // Replace "#" with actual GitHub link
    },
    {
      name: "Project 2",
      image: "src/assets/image2.jpg",
      description: "Description for Project 2",
      likes: "Likes for Project 2",
      challenges: "Challenges for Project 2",
      learned: "What I learned from Project 2",
      techUsed: "Technologies used for Project 2",
      deployedLink: "#", // Replace "#" with actual deployed link
      githubLink: "#", // Replace "#" with actual GitHub link
    },
    // Add more projects as needed
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={project.image} className="d-block w-100" alt={project.name} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{project.name}</h5>
            <p>{project.description}</p>
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