import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the JSON file
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
    "max-width": "70%",
  }
  const containerStyle = {
    "max-width": "70%",
    "min-width": "60%",
  }

  try {
    return (
      <>
        <div className="container-sm text-center mt-5 mb-5" style={custWidth}>
          <strong><u>Bedroom</u></strong>
        </div>
        <div className="container" style={containerStyle}>
          <div className="row row-cols-3 row-cols-sm-3 g-4">
            {productsData.bedroom.map((item, index) => (
              <div className="col" key={index}>
                <Cards
                  price={item.price}
                  product={getBedroomImage(item.image)}
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
    console.error('Error rendering Bedroom component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get bedroom image based on filename
function getBedroomImage(imageName) {
  switch(imageName) {
    case 'bed1.png':
      return bed1;
    case 'bed2.png':
      return bed2;
    case 'bed3.png':
      return bed3;
    case 'bed4.png':
      return bed4;
    case 'bed5.png':
      return bed5;
    case 'bed6.png':
      return bed6;
    case 'bed7.png':
      return bed7;
    case 'bed8.png':
      return bed8;
    case 'bed9.png':
      return bed9;
    default:
      return null;
  }
}

export default Bedroom;
