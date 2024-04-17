import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import painting from '../../../docs/images/painting.webp';
import dresser from '../../../docs/images/Dresser.jpg';
import bed from "../../../docs/images/Bed.jpg";

const Cart = () => {
  const custStyle = {
    "max-width": "50px", 
    "max-height": "50px",
  }

  return (
    <>
    <div className ='container text-center'>
    <header className="centered-header">
      <h3>Your Cart</h3>
    </header>
<div>
<header className="centered-header">
    <h5>Here are some pieces we think you'll love</h5>
</header>
</div>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={painting}className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={dresser} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={bed} className="d-block w-100" alt="..."/>
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
  <div>
    <header className="centered-header">
        <h4>Order Summary</h4>
    </header>
</div>
<div className="container text-center bg-dark">
    <div className="row">
      <div className="col">
        <img src={dresser} className = "img-fluid" alt="..." style={custStyle}/>
      </div>
      <div className="col text-light">
        Japanese Oak Dresser
      </div>
      <div className="col text-light">
        1498.99
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={bed} className = "img-fluid" alt="..." style={custStyle}/>
      </div>
      <div className="col text-light">
        Traditional Bamboo Bed Frame
      </div>
      <div className="col text-light">
        1749.99
      </div>
    </div>
</div>
<div className = "text-center mt-3">
    <button type="button" className="btn btn-secondary btn-lg">Checkout</button>
</div>
</div>

</>

  )
}

export default Cart