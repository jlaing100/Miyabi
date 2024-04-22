import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import outdoor1 from '../../../docs/products/Outdoor/outdoor1.png';
import outdoor2 from '../../../docs/products/Outdoor/outdoor2.png';
import outdoor3 from '../../../docs/products/Outdoor/outdoor3.png';
import outdoor4 from '../../../docs/products/Outdoor/outdoor4.png';
import outdoor5 from '../../../docs/products/Outdoor/outdoor5.png';
import outdoor6 from '../../../docs/products/Outdoor/outdoor6.png';
import outdoor7 from '../../../docs/products/Outdoor/outdoor7.png';
import outdoor8 from '../../../docs/products/Outdoor/outdoor8.png';
import outdoor9 from '../../../docs/products/Outdoor/outdoor9.png';


const Outdoor = () => {
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
        <strong><u>Outdoor</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
        <Cards price = "$121.00" product = {outdoor1} name = "Rattan Patio Chair" link = "https://www.houzz.com/products/cadiz-series-burning-brown-rattan-patio-chair-prvw-vr~100785624"/>
          </div>
      <div className = "col">
      <Cards price = "$103.00" product = {outdoor2} name = "Vidaxl Outdoor Deck Chair" link = "https://www.houzz.com/products/vidaxl-outdoor-deck-chair-bamboo-and-canvas-prvw-vr~171662369"/>
      </div>
      <div className = "col">
      <Cards price = "$171.00" product = {outdoor3} name = "VidaXL Patio Lounge Chair" link = "https://www.houzz.com/products/vidaxl-patio-lounge-chair-outdoor-chaise-lounge-chairs-folding-sunlounger-bamboo-prvw-vr~171662161"/>
      </div>
      <div className = "col">
      <Cards price = "$88.00" product = {outdoor4} name = "Vidaxl Deck Chair" link = "https://www.houzz.com/products/vidaxl-deck-chair-bamboo-and-canvas-dark-gray-prvw-vr~188842780"/>
      </div>
      <div className = "col">
      <Cards price = "$124.00" product = {outdoor5} name = "vidaXL Patio Deck Chair Sling" link = "https://www.houzz.com/products/vidaxl-patio-deck-chair-patio-sling-chair-with-headrest-for-deck-beach-bamboo-prvw-vr~108856065"/>
      </div>      
      <div className = "col">
      <Cards price = "$142.00" product = {outdoor6} name = "Bamboo Folding Chair" link = "https://www.houzz.com/products/bamboo-folding-chairs-set-of-2-prvw-vr~45434686"/>
      </div>
      <div className = "col">
      <Cards price = "$159.00" product = {outdoor7} name = "Folding Bamboo Sling Chair" link = " https://www.houzz.com/products/folding-bamboo-relax-sling-chair-set-of-2-aqua-blue-prvw-vr~147715880"/>
      </div>
      <div className = "col">
      <Cards price = "$702.00" product = {outdoor8} name = "Bamboo Hammock Stand" link = "https://www.houzz.com/products/bamboo-hammock-stand-eco-friendly-xl-prvw-vr~66992087"/>
      </div>
      <div className = "col">
      <Cards price = "$249.00" product = {outdoor9} name = "Chai Chair w/ Cushion" link = "https://www.houzz.com/products/chai-chair-with-cushion-prvw-vr~45434802"/>
      </div>
      
      </div>
      </div>
    </>
  )
}
export default Outdoor