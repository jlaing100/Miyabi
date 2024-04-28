import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alyssa from '../../../docs/team photos/Alyssa.png';
import Nilesh from '../../../docs/team photos/Nilesh.png';

const Team = () => {
  const custWidth = {
    "max-width":"70%",
}
  const containerStyle = {
  "max-width":"70%",
  "min-width":"60%",
}
 try {
  return (
    <>
    <div class="container-sm text-center mt-5 mb-5" style={custWidth}>
    <h1><strong><u>Meet the Team</u></strong></h1>
      <img src={Alyssa} height = "350" width = "357" />
      <h4>Alyssa LaValle</h4>
      <p>Co-Owner</p>
      <img src= {Nilesh} height = "350" width = "357"/>
      <h4>Nilesh Singh</h4>
      <p>Co-Owner</p>
      <h4>Michael Tynes</h4>
      <p>Co-Owner</p>
      <h4>Jonah Liang</h4>
      <p>Co-Owner</p>
    </div>

  </>
  );
}catch (error) {
  console.error('Error rendering About component:', error);
  return <div>Error occurred. Please check the console for details.</div>;
}
}

export default Team