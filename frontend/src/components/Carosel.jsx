import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import examplePng1 from "../../docs/images/examplePng1.png";
import examplePng2 from "../../docs/images/examplePng2.png";

const Carousel = () => {
  const carouselWidth = {
    maxWidth: "60%", // Use camelCase for CSS properties
  };

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade container-sm px-5 py-4 border-bottom" style={carouselWidth} data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={examplePng1} className="d-block w-100 rounded-2" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img src={examplePng2} className="d-block w-100 rounded-2" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img src={examplePng1} className="d-block w-100 rounded-2" alt="Third slide"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
