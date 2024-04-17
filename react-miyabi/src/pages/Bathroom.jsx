import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';

const Bathroom = () => {
  const custWidth = {
    "max-width":"70%",
}
const containerStyle = {
  "max-width":"70%",
  "min-width":"60%",
}
  return (
    <>
<div className="container-sm text-center mt-5 mb-5" style={custWidth}>
        <strong><u>Bathroom</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
          <Cards price = "$199.99"/>
          </div>
      <div className = "col">
        <Cards price = "$29.99"/>
      </div>
      <div className = "col">
        <Cards price = "$99.99"/>
      </div>
      <div className = "col">
        <Cards price = "$59.99"/>
      </div>
      <div className = "col">
        <Cards price = "$39.99"/>
      </div>      
      <div className = "col">
        <Cards price = "$159.99"/>
      </div>
      <div className = "col">
        <Cards price = "$199.99"/>
      </div>
      <div className = "col">
        <Cards price = "$209.99"/>
      </div>
      <div className = "col">
        <Cards price = "$19.99"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Bathroom