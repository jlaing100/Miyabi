import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the combined JSON file
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
          <strong><u>Kitchen</u></strong>
        </div>
        <div className="container" style={containerStyle}>
          <div className="row row-cols-3 row-cols-sm-3 g-4">
            {productsData.kitchen.map((item, index) => (
              <div className="col" key={`kitchen_${index}`}>
                <Cards
                  price={item.price}
                  product={getKitchenImage(item.image)}
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
    console.error('Error rendering Kitchen component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get kitchen image based on filename
function getKitchenImage(imageName) {
  switch(imageName) {
    case 'kitchen1.png':
      return kitchen1;
    case 'kitchen2.png':
      return kitchen2;
    case 'kitchen3.png':
      return kitchen3;
    case 'kitchen4.png':
      return kitchen4;
    case 'kitchen5.png':
      return kitchen5;
    case 'kitchen6.png':
      return kitchen6;
    case 'kitchen7.png':
      return kitchen7;
    case 'kitchen8.png':
      return kitchen8;
    case 'kitchen9.png':
      return kitchen9;
    default:
      return null;
  }
}

export default Kitchen;
