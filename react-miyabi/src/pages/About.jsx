import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../components/Carosel";
import Logo from "../../../docs/images/Miyabi_logo.png";

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
      <div className="container-sm text-center" style={custWidth}>
        <p class = "fs-4">
        Miyabi stands as a paragon of sophistication, redefining luxury through its peerless bamboo furniture range. Each creation represents a harmonious marriage of traditional artisanal craftsmanship and avant-garde design sensibilities, resulting in pieces that exude an enduring allure while championing environmental stewardship.
        Miyabi's commitment to sustainability is woven into the very fabric of its creations. By harnessing the natural beauty and resilience of bamboo, the brand not only crafts exquisite furniture but also advocates for responsible consumption and mindful living. From the careful selection of materials to the meticulous attention to detail in every stage of production, Miyabi ensures that each piece not only graces living spaces with elegance but also leaves a minimal ecological footprint.
        <br></br><br></br>
        The collection spans a spectrum of styles, from sleek and understated chairs that epitomize modern minimalism to elaborate tables adorned with intricate detailing that harks back to the golden age of craftsmanship. Regardless of the design, each Miyabi creation serves as a testament to the brand's unwavering commitment to quality, luxury, and environmental consciousness.
        Embracing Miyabi furniture isn't merely about adorning one's home with exquisite pieces; it's a declaration of one's dedication to a lifestyle that seamlessly integrates opulence with eco-consciousness. It's an invitation to indulge in the finer things in life while simultaneously contributing to the preservation of our planet for generations to come.
        </p>
      </div>
      <div className="container-sm text-center mt-5 mb-5" style={custWidth}>
          <h1><strong><u>Our Logo</u></strong></h1>
          <img src={Logo} height = "350" width = "357"/>
      </div>    
      <div className="container-sm text-center" style={custWidth}>
        <p class = "fs-4">
        Miyabi (雅) is one of the traditional Japanese aesthetic ideals. In modern Japanese, the word is usually translated as "elegance," "refinement," or "courtliness" and sometimes to a "sweet loved one".
        <br></br><br></br>
        As Miyabi transcends linguistic boundaries, it serves as a fitting namesake for a brand that endeavors to embody the essence of sophistication and beauty in its creations. Through its exceptional bamboo furniture collection, Miyabi not only pays homage to its Japanese heritage but also invites individuals to cultivate a lifestyle enriched with elegance, refinement, and a deep appreciation for the artistry of living.
        </p>
      </div>
      </>
  );
  }catch (error) {
  console.error('Error rendering About component:', error);
  return <div>Error occurred. Please check the console for details.</div>;
}
}

export default About