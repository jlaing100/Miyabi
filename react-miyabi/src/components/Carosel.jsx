import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import examplePng1 from "../../../docs/images/examplePng1.png"
import examplePng2 from "../../../docs/images/examplePng2.png"

const Carosel = () => {
    const caroselWidth = {
        "max-width":"60%",
    }
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade container-sm px-5 py-4 border-bottom" style={caroselWidth}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={examplePng1} className="d-block w-100 rounded-2" alt="../docs/images/Miyabi.png"/>
        </div>
        <div className="carousel-item">
          <img src={examplePng2} className="d-block w-100 rounded-2" alt="../docs/images/Miyabi.png"/>
        </div>
        <div className="carousel-item">
          <img src={examplePng1} className="d-block w-100 rounded-2" alt="../docs/images/Miyabi.png"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default Carosel