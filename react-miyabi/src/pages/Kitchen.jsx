import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import kitchen1 from '../../../docs/products/Kitchen/kitchen1.png';
import kitchen2 from '../../../docs/products/Kitchen/kitchen2.png';
import kitchen3 from '../../../docs/products/Kitchen/kitchen3.png';
import kitchen4 from '../../../docs/products/Kitchen/kitchen4.png';
import kitchen5 from '../../../docs/products/Kitchen/kitchen5.png';
import kitchen6 from '../../../docs/products/Kitchen/kitchen6.png';
import kitchen7 from '../../../docs/products/Kitchen/kitchen7.png';
import kitchen8 from '../../../docs/products/Kitchen/kitchen8.png';
import kitchen9 from '../../../docs/products/Kitchen/kitchen9.png';

const Kitchen = () => {
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
        <strong><u>Kitchen</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
        <Cards price = "$52.00" product = {kitchen1} name = "Lotte Modern Mobile Kitchen Cart" link = "https://www.houzz.com/products/lotte-modern-oak-brown-wood-and-black-metal-3-tier-mobile-kitchen-cart-prvw-vr~185016815"/>
          </div>
      <div className = "col">
      <Cards price = "$140.00" product = {kitchen2} name = "Costway 4-Tier Cabinet" link = "https://www.houzz.com/products/costway-4-tier-rolling-wood-kitchen-cart-island-storage-cabinet-shelf-drawer-prvw-vr~169729946"/>
      </div>
      <div className = "col">
      <Cards price = "$166.00" product = {kitchen3} name = "Steve Silver Belden Cart" link = "https://www.houzz.com/products/belden-kitchen-cart-white-prvw-vr~162667284"/>
      </div>
      <div className = "col">
      <Cards price = "$1,799.00" product = {kitchen4} name = "Beau Kitchen Island" link = "https://www.houzz.com/products/beau-kitchen-island-72x30x36-prvw-vr~195867722"/>
      </div>
      <div className = "col">
      <Cards price = "$840.00" product = {kitchen5} name = "Duramax Darby Island Desk" link = "https://www.houzz.com/products/duramax-darby-72-industrial-metal-and-wood-kitchen-island-desk-with-drawers-prvw-vr~163998660?lid=115303007"/>
      </div>      
      <div className = "col">
      <Cards price = "$251.00" product = {kitchen6} name = "Kitchen Island w/Spice Rack" link = "https://www.houzz.com/products/kitchen-island-spice-rack-prvw-vr~194862063"/>
      </div>
      <div className = "col">
      <Cards price = "$321.00" product = {kitchen7} name = "Dolly Madison Wood Rolling Cart" link = "https://www.houzz.com/products/homestyles-dolly-madison-wood-rolling-kitchen-cart-in-black-prvw-vr~13960645"/>
      </div>
      <div className = "col">
      <Cards price = "$1,399.00" product = {kitchen8} name = "Beau Kitchen Island Transistional" link = "https://www.houzz.com/products/beau-kitchen-island-48x30x36-prvw-vr~195867718"/>
      </div>
      <div className = "col">
      <Cards price = "$491.00" product = {kitchen9} name = "Orleans Brown Kitchen Island" link = "https://www.houzz.com/products/homestyles-orleans-brown-kitchen-island-prvw-vr~190922324"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Kitchen