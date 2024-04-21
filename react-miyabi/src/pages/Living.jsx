import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import Living1 from '../../../docs/products/Living/Living1.png';
import Living2 from '../../../docs/products/Living/Living2.png';
import Living3 from '../../../docs/products/Living/Living3.png';
import Living4 from '../../../docs/products/Living/Living4.png';
import Living5 from '../../../docs/products/Living/Living5.png';
import Living6 from '../../../docs/products/Living/Living6.png';
import Living7 from '../../../docs/products/Living/Living7.png';
import Living8 from '../../../docs/products/Living/Living8.png';
import Living9 from '../../../docs/products/Living/Living9.png';

const Living = () => {
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
        <strong><u>Living Room</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
          <Cards price = "$199.99" product = {Living1}/>
          </div>
      <div className = "col">
        <Cards price = "$29.99"product = {Living2}/>
      </div>
      <div className = "col">
        <Cards price = "$99.99"product = {Living3}/>
      </div>
      <div className = "col">
        <Cards price = "$59.99"product = {Living4}/>
      </div>
      <div className = "col">
        <Cards price = "$39.99"product = {Living5}/>
      </div>      
      <div className = "col">
        <Cards price = "$159.99"product = {Living6}/>
      </div>
      <div className = "col">
        <Cards price = "$199.99"product = {Living7}/>
      </div>
      <div className = "col">
        <Cards price = "$209.99"product = {Living8}/>
      </div>
      <div className = "col">
        <Cards price = "$19.99"product = {Living9}/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Living