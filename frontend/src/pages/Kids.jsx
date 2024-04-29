import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the combined JSON file
import kids1 from '../../docs/products/Kids/kids1.png';
import kids2 from '../../docs/products/Kids/kids2.png';
import kids3 from '../../docs/products/Kids/kids3.png';
import kids4 from '../../docs/products/Kids/kids4.png';
import kids5 from '../../docs/products/Kids/kids5.png';
import kids6 from '../../docs/products/Kids/kids6.png';
import kids7 from '../../docs/products/Kids/kids7.png';
import kids8 from '../../docs/products/Kids/kids8.png';
import kids9 from '../../docs/products/Kids/kids9.png';

const Kids = () => {
  const custWidth = {
    "max-width": "70%",
  };
  const containerStyle = {
    "max-width": "70%",
    "min-width": "60%",
  };

  try {
    return (
      <>
        <div className="container-sm text-center mt-5 mb-5" style={custWidth}>
          <h1><strong><u>Kids</u></strong></h1>
        </div>
        <div className="container" style={containerStyle}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {productsData.kids.map((item, index) => (
              <div className="col" key={`kids_${index}`}>
                <Cards
                  price={item.price}
                  product={getKidsImage(item.image)}
                  name={item.name}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering Kids component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get kids image based on filename
function getKidsImage(imageName) {
  switch(imageName) {
    case 'kids1.png':
      return kids1;
    case 'kids2.png':
      return kids2;
    case 'kids3.png':
      return kids3;
    case 'kids4.png':
      return kids4;
    case 'kids5.png':
      return kids5;
    case 'kids6.png':
      return kids6;
    case 'kids7.png':
      return kids7;
    case 'kids8.png':
      return kids8;
    case 'kids9.png':
      return kids9;
    default:
      return null;
  }
}

export default Kids;
