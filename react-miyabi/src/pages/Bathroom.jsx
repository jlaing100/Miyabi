import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import bathroom1 from '../../../docs/products/Bathroom/bathroom1.png';
import bathroom2 from '../../../docs/products/Bathroom/bathroom2.png';
import bathroom3 from '../../../docs/products/Bathroom/bathroom3.png';
import bathroom4 from '../../../docs/products/Bathroom/bathroom4.png';
import bathroom5 from '../../../docs/products/Bathroom/bathroom5.png';
import bathroom6 from '../../../docs/products/Bathroom/bathroom6.png';
import bathroom7 from '../../../docs/products/Bathroom/bathroom7.png';
import bathroom8 from '../../../docs/products/Bathroom/bathroom8.png';
import bathroom9 from '../../../docs/products/Bathroom/bathroom9.png';

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
        <Cards price = "$629.00" product = {bathroom1} name = "Wall mounted MOB24 Vanity" link = "https://www.houzz.com/products/mob-24-wall-mounted-vanity-with-reinforced-acrylic-sink-rosewood-prvw-vr~93850603"/>
          </div>
      <div className = "col">
      <Cards price = "$60.00" product = {bathroom2} name = "Crane Wood Bathroom Floor Storage" link = "https://www.houzz.com/products/crane-wood-bathroom-floor-storage-cabinet-white-prvw-vr~201935911"/>
      </div>
      <div className = "col">
      <Cards price = "$168.00" product = {bathroom3} name = "Marcia 27 inch Med Cabinet" link = "https://www.houzz.com/products/marcia-27-tall-medicine-cabinet-prvw-vr~182221593"/>
      </div>
      <div className = "col">
      <Cards price = "$624.00" product = {bathroom4} name = "Bliss 18 x 59 Side Cabinet" link = "https://www.houzz.com/products/bliss-18w-x-59h-linen-side-cabinet-3-doors-gray-oak-finish-nature-wood-prvw-vr~147467165"/>
      </div>
      <div className = "col">
      <Cards price = "$364.00" product = {bathroom5} name = "Class 15 x 60 Linen Cabinet" link = " https://www.houzz.com/products/class-15wx60hx15d-linen-cabinet-oak-prvw-vr~196372731"/>
      </div>      
      <div className = "col">
      <Cards price = "$400.00" product = {bathroom6} name = "EcoDecors 24 inch Wall Cabinet" link = "https://decoteak.com/products/products-ecodecors-significado-solid-teak-curvature-teak-bathroom-wall-cabinet-fully-assembled-html?variant=47386823033150"/>
      </div>
      <div className = "col">
      <Cards price = "$75.00" product = {bathroom7} name = "Milan Storage Cabinet" link = "https://www.houzz.com/products/milan-storage-cabinet-small-walnut-prvw-vr~177683129?lid=121692529"/>
      </div>
      <div className = "col">
      <Cards price = "$1,075.00" product = {bathroom8} name = "EcoDecors 79 inch Linen Tower" link = "https://www.houzz.com/products/ecodecors-significado-79-teak-free-standing-linen-tower-in-natural-prvw-vr~155939182?lid=111971359"/>
      </div>
      <div className = "col">
      <Cards price = "$249.00" product = {bathroom9} name = "Venus Linen Cabinet" link = "https://www.houzz.com/products/venus-linen-cabinet-light-oak-prvw-vr~188235585"/>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default Bathroom