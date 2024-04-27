import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../components/Carosel";

const About = () => {
  const custWidth = {
    "max-width":"70%",
}
  const containerStyle = {
  "max-width":"70%",
  "min-width":"60%",
}
  try{
    return (
      <>
      <Carosel />
      <div className="container-sm text-center mt-5 mb-5" style={custWidth}>
          <h1><strong><u>About Miyabi</u></strong></h1>
      </div>
      <div className="text-center">
        <h6>Miyabi redefines luxury with its high-end bamboo furniture. 
          Combining traditional craftsmanship, each piece reflects elegance and sustainability. 
          From minimalist chairs to intricately detailed tables, Miyabi embraces an eco-conscious 
          living in style.</h6>
        <br></br>
        <p>Our brand is completely authentic coming from </p>
      </div>
      </>
  );
  }catch (error) {
  console.error('Error rendering About component:', error);
  return <div>Error occurred. Please check the console for details.</div>;
}
}

export default About