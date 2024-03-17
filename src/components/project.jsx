// src/components/project.jsx

// git add . && git commit -m "first commit" && git push

import React from "react";
import Gallery from "./Gallery.jsx";

const Project = () => {
  return (
    <div className="container py-2">
      <h1 className="textPersonalMainHeader pt-2">Projects</h1>
      <hr className="w-75" />

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              {/* Carousel */}
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Gallery */}
                  <Gallery />
                </div>
                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* End of Carousel */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
