import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the combined JSON file
import Living1 from '../../docs/products/Living/living1.png';
import Living2 from '../../docs/products/Living/living2.png';
import Living3 from '../../docs/products/Living/living3.png';
import Living4 from '../../docs/products/Living/living4.png';
import Living5 from '../../docs/products/Living/living5.png';
import Living6 from '../../docs/products/Living/living6.png';
import Living7 from '../../docs/products/Living/living7.png';
import Living8 from '../../docs/products/Living/living8.png';
import Living9 from '../../docs/products/Living/living9.png';

const Living = () => {
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
          <h1><strong><u>Living Room</u></strong></h1>
        </div>
        <div className="container" style={containerStyle}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {productsData.living.map((item, index) => (
              <div className="col" key={`living_${index}`}>
                <Cards
                  price={item.price}
                  product={getLivingImage(item.image)}
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
    console.error('Error rendering Living component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get living image based on filename
function getLivingImage(imageName) {
  switch(imageName) {
    case 'living1.png':
      return Living1;
    case 'living2.png':
      return Living2;
    case 'living3.png':
      return Living3;
    case 'living4.png':
      return Living4;
    case 'living5.png':
      return Living5;
    case 'living6.png':
      return Living6;
    case 'living7.png':
      return Living7;
    case 'living8.png':
      return Living8;
    case 'living9.png':
      return Living9;
    default:
      return null;
  }
}

export default Living;
