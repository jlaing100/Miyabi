import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import exampleCard from "../../../docs/images/exampleCard.png";

const Cards = (props) => {
    const containerStyle = {
        "max-width":"70%",
        "min-width":"60%",
    }
    const cardStyle = {
        "border-color":"#a0583c",
        "max-width":"80%",
    }
    const font = {
        "font-size": "70%",
    }
    
return (
    <>
{/* <div className="container" style={containerStyle}>
    <div className="row row-cols-3 row-cols-sm-3 g-4">
      <div className="col"> */}
        <div className="card" style={cardStyle}>
          <img src={props.product} className="card-img-top" alt="../docs/images/exampleCard.png"/>
          <div className="card-body">
            <p className="card-title fw-bolder fs-6">{props.name}</p>
            <p className="card-text fw-medium" style={font}>From {props.price}</p>
            <p>Link:</p>
            <p className="card-text fw-medium" style={font}><a href={props.link}>{props.link}</a></p>

          </div>
        </div>
      {/* </div>
    </div>
  </div>     */}
  </>
  )
}

export default Cards