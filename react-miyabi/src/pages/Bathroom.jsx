import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the JSON file
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
          <strong><u>Bathroom</u></strong>
        </div>
        <div className="container" style={containerStyle}>
          <div className="row row-cols-3 row-cols-sm-3 g-4">
            {productsData.bathroom.map((item, index) => (
              <div className="col" key={index}>
                <Cards
                  price={item.price}
                  product={getImage(item.image)}
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
    console.error('Error rendering Bathroom component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get image based on name
function getImage(imageName) {
  switch(imageName) {
    case 'bathroom1.png':
      return bathroom1;
    case 'bathroom2.png':
      return bathroom2;
    case 'bathroom3.png':
      return bathroom3;
    case 'bathroom4.png':
      return bathroom4;
    case 'bathroom5.png':
      return bathroom5;
    case 'bathroom6.png':
      return bathroom6;
    case 'bathroom7.png':
      return bathroom7;
    case 'bathroom8.png':
      return bathroom8;
    case 'bathroom9.png':
      return bathroom9;
    default:
      return null;
  }
}

export default Bathroom;
