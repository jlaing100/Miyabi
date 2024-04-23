import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the combined JSON file
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
          <strong><u>Outdoor</u></strong>
        </div>
        <div className="container" style={containerStyle}>
          <div className="row row-cols-3 row-cols-sm-3 g-4">
            {productsData.outdoor.map((item, index) => (
              <div className="col" key={`outdoor_${index}`}>
                <Cards
                  price={item.price}
                  product={getOutdoorImage(item.image)}
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
    console.error('Error rendering Outdoor component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get outdoor image based on filename
function getOutdoorImage(imageName) {
  switch(imageName) {
    case 'outdoor1.png':
      return outdoor1;
    case 'outdoor2.png':
      return outdoor2;
    case 'outdoor3.png':
      return outdoor3;
    case 'outdoor4.png':
      return outdoor4;
    case 'outdoor5.png':
      return outdoor5;
    case 'outdoor6.png':
      return outdoor6;
    case 'outdoor7.png':
      return outdoor7;
    case 'outdoor8.png':
      return outdoor8;
    case 'outdoor9.png':
      return outdoor9;
    default:
      return null;
  }
}

export default Outdoor;
