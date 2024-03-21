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
      techUsed: "API calls, Kambam, json, javascript, html, css, bootstrap",
      deployedLink: "https://hpro97.github.io/DateNight/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/DateNight", // Replace "#" with actual GitHub link
    },
    {
      name: "Weather Dashboard",
      image: "src/assets/weatherDash.png",
      description: "Weather dash using API calls to display the current weather and 5 day forecast",
      learned: "i learned more about APIs, and the use of local storage, whilst how to impelement new tech i'm unfamiliar with",
      techUsed: "API calls, Local storage, Jquery, DayJS, javascript, html, css, bootstrap",
      deployedLink: "https://hpro97.github.io/WeatherDashboard/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/WeatherDashboard", // Replace "#" with actual GitHub link
    },
    {
      name: "Personal Planner",
      image: "src/assets/personalPlanner.png",
      description: "Personal Planner with color coordination and local storage",
      learned: "i learned more about local storage, Jquery libraries and reusing JS function",
      techUsed: "local storage, Jquery, DayJS, javascript, html, css",
      deployedLink: "https://hpro97.github.io/personalPlanner/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/personalPlanner", // Replace "#" with actual GitHub link
    },
    {
      name: "Quizz",
      image: "src/assets/quizz.png",
      description: "Brief quizz",
      learned: "i learned more about displaying and hiding information to avoid page reloading and basic JS funcitons like counters built from scratch",
      techUsed: "local storage, Jquery, javascript, html, css",
      deployedLink: "https://hpro97.github.io/Quizz/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/Quizz", // Replace "#" with actual GitHub link
    },
    {
      name: "PassGen",
      image: "src/assets/passGen.png",
      description: "random password generator",
      learned: "i learned more vainilla JS and implementing things like alerts and Math.random/floor",
      techUsed: "javascript, html, css",
      deployedLink: "https://hpro97.github.io/passwordGenerator/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/passwordGenerator", // Replace "#" with actual GitHub link
    },
    {
      name: "Console Finances",
      image: "src/assets/console.png",
      description: "math functions example for company finances using console to display results",
      learned: "i learned about using the console and doing advanced math funcitons in JS",
      techUsed: "javascript, html, css",
      deployedLink: "https://hpro97.github.io/Console-Finances/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/Console-Finances", // Replace "#" with actual GitHub link
    },
    {
      name: "Bootstrap Portfolio",
      image: "src/assets/bootstrap.png",
      description: "bootstrap portfolio proof of concept of knowledge learned",
      learned: "i learned about using bootstrap and CSS libraries to style pages",
      techUsed: "html, css, bootstrap",
      deployedLink: "https://hpro97.github.io/Bootstrap-Portfolio/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/Bootstrap-Portfolio", // Replace "#" with actual GitHub link
    },
    {
      name: "Portfolio",
      image: "src/assets/portfolio.png",
      description: "portfolio proof of concept of knowledge learned",
      learned: "i learned the basics of HTML and CSS",
      techUsed: "html, css",
      deployedLink: "https://hpro97.github.io/portfolio/", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/portfolio", // Replace "#" with actual GitHub link
    },
    {
      name: "SEO Optimization",
      image: "src/assets/seo.png",
      description: "graded challenge portfolio proof of concept of knowledge learned",
      learned: "i learned the basics of HTML and SEO",
      techUsed: "html",
      deployedLink: "https://hpro97.github.io/seo_optimization/#social-media-marketing", // Replace "#" with actual deployed link
      githubLink: "https://github.com/hpro97/seo_optimization", // Replace "#" with actual GitHub link
    },
    
  ];

  return (
    <div className="carousel-inner">
      {projects.map((project, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={project.image} className="d-block w-100" alt={project.name} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Name: {project.name}</h5>
            <p>Description: {project.description}</p>
            <p>Learned: {project.learned}</p>
            <p>Tech: {project.techUsed}</p>
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
    </div>
  );
};

export default Gallery;

    //add first sentra pass project
    //add second react portfolio project

//make pic not background but object
//rejigg info inside carousel