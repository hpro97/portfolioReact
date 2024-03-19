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
      techUsed: "Jest, npm, Node.js, json, javascript, html, css",
      deployedLink: "https://hpro97.github.io/TeamProfileGen/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/TeamProfileGen", // Replace "#" with actual GitHub link
    },
    {
      name: "Readme Generator",
      image: "src/assets/readmeGen.png",
      description: "Command line prompts user for input and generates a README file from a template i created",
      learned: "i learned more about npm, Inquirer, use of badges and the possibility of using a template to dynamically generate a file",
      techUsed: "Inquirer, npm, Node.js, json, javascript, html, css",
      deployedLink: "https://github.com/hpro97/README-Generator?tab=readme-ov-file", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/README-Generator/blob/main/README%20test.md", // Replace "#" with actual GitHub link
    },
    {
      name: "Date Night",
      image: "src/assets/dateNight.png",
      description: "web application that seamlessly combines the worlds of gastronomy and cinema, providing users with specific search criteria and random recommendations for a delightful night in.",
      learned: "i learned more about APIs, managing a project (whilst sill implementing my own code alongside), people skills, overcoming deadlines and focusing on an MVP with a mobile first approach, all whilst overcoming obstacles and maintianing a positive mindset",
      techUsed: "API calls, Kambam, json, javascript, html, css",
      deployedLink: "https://hpro97.github.io/DateNight/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/DateNight", // Replace "#" with actual GitHub link
    },
    {
      name: "Weather Dashboard",
      image: "src/assets/weatherDash.png",
      description: "Weather dash using API calls to display the current weather and 5 day forecast",
      learned: "i learned more about APIs, and the use of local storage, whilst how to impelement new tech i'm unfamiliar with",
      techUsed: "API calls, Local storage, Jquery, DayJS, javascript, html, css",
      deployedLink: "https://hpro97.github.io/WeatherDashboard/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/WeatherDashboard", // Replace "#" with actual GitHub link
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