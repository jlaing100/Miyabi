import React from 'react';
import Carosel from '../components/Carosel';
import Cards from '../components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsData from './productsData.json'; // Import the combined JSON file
import kids1 from '../../docs/products/Kids/kids1.png';
import bathroom2 from '../../docs/products/Bathroom/bathroom2.png';
import bedroom3 from '../../docs/products/Bedroom/bed3.png';
import dining4 from '../../docs/products/Dining/dining4.png';
import kitchen5 from '../../docs/products/Kitchen/kitchen5.png';
import living6 from '../../docs/products/Living/living6.png';
import outdoor7 from '../../docs/products/Outdoor/outdoor7.png';
import bathroom8 from '../../docs/products/Bathroom/bathroom8.png';
import bedroom9 from '../../docs/products/Bedroom/bed9.png';

const Home = () => {
  const containerStyle = {
    maxWidth: "70%",
    minWidth: "60%",
  };

  return (
    <>
      <Carosel />
      <div className="container-sm text-center mt-5 mb-5">
        <h1><strong><u>Featured Items</u></strong></h1>
      </div>
      <div className="container" style={containerStyle}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <Cards price= "$105.66" product={kids1} name="Bamboo Toddler Chair" link="https://www.etsy.com/listing/1649336963/bamboo-toddler-chair-bamboo-childs-chair" />
          </div>
          <div className="col">
            <Cards price="$60.00" product={bathroom2} name="Crane Wood Bathroom Floor Storage" link="https://www.houzz.com/products/crane-wood-bathroom-floor-storage-cabinet-white-prvw-vr~201935911"/>
          </div>
          <div className="col">
            <Cards price="$6669.99" product={bedroom3} name="Copeland Dresser" link="https://haikudesigns.com/products/copeland-sloane-10-drawer-dresser" />
          </div>
          <div className="col">
            <Cards price="$3818.00" product={dining4} name="Modurn Dining Set" link="https://haikudesigns.com/products/modurn-dining-set"/>
          </div>
          <div className="col">
            <Cards price="$$840.00" product={kitchen5}name="Duramax Darby Island Desk" link="https://haikudesigns.com/products/copeland-sloane-10-drawer-dresser" />
          </div>
          <div className="col">
            <Cards price="$1397.00" product={living6}name="Copeland Coffee Table" link="https://haikudesigns.com/products/copeland-entwine-round-coffee-table" />
          </div>
          <div className="col">
            <Cards price="$159.00" product={outdoor7} name="Folding Bamboo Sling Chair" link="https://www.houzz.com/products/ecodecors-significado-79-teak-free-standing-linen-tower-in-natural-prvw-vr~155939182?lid=111971359"/>
          </div>
          <div className="col">
            <Cards price="1,075.00" product={bathroom8} name="EcoDecors 79 inch Linen Tower" link="https://haikudesigns.com/products/copeland-sloane-10-drawer-dresser"/>
          </div>
          <div className="col">
            <Cards price="$580.00" product={bedroom9} name="Currant Long Bench" link="https://haikudesigns.com/products/currant-long-bench"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
