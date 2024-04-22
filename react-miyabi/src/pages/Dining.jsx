import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import dining1 from '../../../docs/products/Dining/dining1.png';
import dining2 from '../../../docs/products/Dining/dining2.png';
import dining3 from '../../../docs/products/Dining/dining3.png';
import dining4 from '../../../docs/products/Dining/dining4.png';
import dining5 from '../../../docs/products/Dining/dining5.png';
import dining6 from '../../../docs/products/Dining/dining6.png';
import dining7 from '../../../docs/products/Dining/dining7.png';
import dining8 from '../../../docs/products/Dining/dining8.png';
import dining9 from '../../../docs/products/Dining/dining9.png';

const Dining = () => {
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
        <strong><u>Dining Room</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
        <Cards price = "$3,337.00" product = {dining1} name = "Venice Dining Set" link = " https://haikudesigns.com/products/venice-dining-set"/>
          </div>
      <div className = "col">
      <Cards price = "$2,894.00" product = {dining2} name = "Pearl Dining Set" link = " https://haikudesigns.com/products/pearl-dining-set"/>
      </div>
      <div className = "col">
      <Cards price = "$3,562.00" product = {dining3} name = "Palm Dining Set" link = "https://haikudesigns.com/products/palm-dining-set"/>
      </div>
      <div className = "col">
      <Cards price = "$3,818.00" product = {dining4} name = "Modurn Dining Set" link = " https://haikudesigns.com/products/modurn-dining-set"/>
      </div>
      <div className = "col">
      <Cards price = "$5,633.00" product = {dining5} name = "Hamilton Dining Set" link = "https://haikudesigns.com/products/hamilton-dining-set"/>
      </div>      
      <div className = "col">
      <Cards price = "$4,554.00" product = {dining6} name = "Birmingham Dining Set" link = "https://haikudesigns.com/products/birmingham-family-dining-set"/>
      </div>
      <div className = "col">
      <Cards price = "$6,739.00" product = {dining7} name = "La Costa Dining Set" link = "https://haikudesigns.com/products/la-costa-dining-set"/>
      </div>
      <div className = "col">
      <Cards price = "$849.00" product = {dining8} name = "Vino Bar Table" link = "https://haikudesigns.com/products/vino-4-seater-bar-table"/>
      </div>
      <div className = "col">
      <Cards price = "$879.00" product = {dining9} name = "Roost Dining Table" link = "https://haikudesigns.com/products/roost-4-seat-reclaimed-teak-51-round-dining-table"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Dining