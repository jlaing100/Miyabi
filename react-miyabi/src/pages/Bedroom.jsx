import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import bed1 from '../../../docs/products/Bedroom/bed1.png';
import bed2 from '../../../docs/products/Bedroom/bed2.png';
import bed3 from '../../../docs/products/Bedroom/bed3.png';
import bed4 from '../../../docs/products/Bedroom/bed4.png';
import bed5 from '../../../docs/products/Bedroom/bed5.png';
import bed6 from '../../../docs/products/Bedroom/bed6.png';
import bed7 from '../../../docs/products/Bedroom/bed7.png';
import bed8 from '../../../docs/products/Bedroom/bed8.png';
import bed9 from '../../../docs/products/Bedroom/bed9.png';

const Bedroom = () => {
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
        <strong><u>Bedroom</u></strong>
    </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
        <Cards price = "$2038.00" product = {bed1} name = "Azura Platform" link = "https://haikudesigns.com/products/azara-platform-bed"/>
          </div>
      <div className = "col">
      <Cards price = "$432.00" product = {bed2} name = "Ria 1 Nightstand" link = "https://haikudesigns.com/products/azara-platform-bed"/>
      </div>
      <div className = "col">
      <Cards price = "$6669.00" product = {bed3} name = "Copeland Dresser" link = "https://haikudesigns.com/products/copeland-sloane-10-drawer-dresser"/>
      </div>
      <div className = "col">
      <Cards price = "$5349.00" product = {bed4} name = "Copeland Storage Bed" link = "https://haikudesigns.com/products/monterey-52-storage-bed"/>
      </div>
      <div className = "col">
      <Cards price = "$3234.00" product = {bed5} name = "Copeland Drawer Chest" link = "https://haikudesigns.com/products/monterey-52-storage-bed"/>
      </div>      
      <div className = "col">
      <Cards price = "$699.00" product = {bed6} name = "Raku Tatami Mat" link = "https://haikudesigns.com/products/raku-tatami-mat"/>
      </div>
      <div className = "col">
      <Cards price = "$1049.00" product = {bed7} name = "Raku Tatami High Rise Bed" link = "https://haikudesigns.com/products/raku-tatami-high-rise-bed"/>
      </div>
      <div className = "col">
      <Cards price = "$463.00" product = {bed8} name = "Currant Short Bench" link = "https://haikudesigns.com/products/currant-short-bench"/>
      </div>
      <div className = "col">
      <Cards price = "$580.00" product = {bed9} name = "Currant Long Bench" link = "https://haikudesigns.com/products/currant-long-bench"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Bedroom