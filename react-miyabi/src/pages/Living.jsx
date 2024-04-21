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
          <Cards price = "$52.00" product = {Living1} name = "Bamboo Rug" link = "https://haikudesigns.com/products/contemporary-natural-bamboo-rug?variant=46519833690422"/>
          </div>
      <div className = "col">
        <Cards price = "$901.00"product = {Living2}name = "Azara Coffee Table"link = "https://haikudesigns.com/products/azara-coffee-table"/>
      </div>
      <div className = "col">
        <Cards price = "551.00"product = {Living3}name = "Azara End Table"link = "https://haikudesigns.com/products/azara-end-table"/>
      </div>
      <div className = "col">
        <Cards price = "$638.00"product = {Living4}name = "Danica Lounge Chair"link = "https://haikudesigns.com/products/danica-lounge-chair"/>
      </div>
      <div className = "col">
        <Cards price = "$3495.00"product = {Living5}name = "Ran D.E.L Sofa Bed"link = "https://haikudesigns.com/products/ran-d-e-l-sofa-bed"/>
      </div>      
      <div className = "col">
        <Cards price = "$1397.00"product = {Living6}name = "Copeland Coffee Table"link = "https://haikudesigns.com/products/copeland-entwine-round-coffee-table"/>
      </div>
      <div className = "col">
        <Cards price = "$2800.00"product = {Living7}name = "Strickland Mirror"link = "https://haikudesigns.com/products/strickland-mirror"/>
      </div>
      <div className = "col">
        <Cards price = "$2032.00"product = {Living8}name = "Vallarta Bookshelf"link = "https://haikudesigns.com/products/vallarta-bookshelf"/>
      </div>
      <div className = "col">
        <Cards price = "$1361.00"product = {Living9}name = "Antonio Media Cabinet"link = "https://haikudesigns.com/products/antonio-media-cabinet"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Living