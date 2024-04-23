import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import productsData from './productsData.json'; // Import the combined JSON file
import dining1 from '../../../docs/products/Dining/dining1.png';
import dining2 from '../../../docs/products/Dining/dining2.png';
import dining3 from '../../../docs/products/Dining/dining3.png';
import dining4 from '../../../docs/products/Dining/dining4.png';
import dining5 from '../../../docs/products/Dining/dining5.png';
import dining6 from '../../../docs/products/Dining/dining6.png';
import dining7 from '../../../docs/products/Dining/dining7.png';
import dining8 from '../../../docs/products/Dining/dining8.png';
import dining9 from '../../../docs/products/Dining/dining9.png';

const Dining = () => {
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
          <strong><u>Dining Room</u></strong>
        </div>
        <div className="container" style={containerStyle}>
          <div className="row row-cols-3 row-cols-sm-3 g-4">
            {productsData.dining.map((item, index) => (
              <div className="col" key={`dining_${index}`}>
                <Cards
                  price={item.price}
                  product={getDiningImage(item.image)}
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
    console.error('Error rendering Dining component:', error);
    return <div>Error occurred. Please check the console for details.</div>;
  }
}

// Function to get dining image based on filename
function getDiningImage(imageName) {
  switch(imageName) {
    case 'dining1.png':
      return dining1;
    case 'dining2.png':
      return dining2;
    case 'dining3.png':
      return dining3;
    case 'dining4.png':
      return dining4;
    case 'dining5.png':
      return dining5;
    case 'dining6.png':
      return dining6;
    case 'dining7.png':
      return dining7;
    case 'dining8.png':
      return dining8;
    case 'dining9.png':
      return dining9;
    default:
      return null;
  }
}

export default Dining;
