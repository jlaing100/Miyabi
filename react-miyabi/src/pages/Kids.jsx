import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import kids1 from '../../../docs/products/Kids/kids1.png';
import kids2 from '../../../docs/products/Kids/kids2.png';
import kids3 from '../../../docs/products/Kids/kids3.png';
import kids4 from '../../../docs/products/Kids/kids4.png';
import kids5 from '../../../docs/products/Kids/kids5.png';
import kids6 from '../../../docs/products/Kids/kids6.png';
import kids7 from '../../../docs/products/Kids/kids7.png';
import kids8 from '../../../docs/products/Kids/kids8.png';
import kids9 from '../../../docs/products/Kids/kids9.png';

const Kids = () => {
    const custWidth = {
        "max-width":"70%",
    }
    const containerStyle = {
      "max-width":"70%",
      "min-width":"60%",
    }
      return (
        <>
    <div className="container-sm text-center mt-5 mb-5" style={custWidth}>
            <strong><u>Kids</u></strong>
            </div>
    <div className="container" style={containerStyle}>
      <div className="row row-cols-3 row-cols-sm-3 g-4">
        <div className="col">
        <Cards price = "$105.66" product = {kids1} name = "Bamboo Toddler Chair" link = "https://www.etsy.com/listing/1649336963/bamboo-toddler-chair-bamboo-childs-chair"/>
          </div>
      <div className = "col">
      <Cards price = "$132.35" product = {kids2} name = "Childs Chair with Woven Seat" link = "https://www.etsy.com/listing/1607122340/wooden-toddler-chair-childs-chair-with?click_key=910a86cb8ecd1d7d3b9c3221ee1be2ade13d651e%3A1607122340&click_sum=04bfe10e&ref=related-1&sts=1"/>
      </div>
      <div className = "col">
      <Cards price = "$55.61" product = {kids3} name = "Charles Dudouyt Style Chair kids" link = " https://www.etsy.com/listing/1466952527/charles-dudouyt-style-chair-for-children?click_key=2601756523c5968fd7532217e609f629d5d4578a%3A1466952527&click_sum=af4c6ebd&ref=internal_similar_listing_bot-1&listing_id=1466952527&listing_slug=charles-dudouyt-style-chair-for-children"/>
      </div>
      <div className = "col">
      <Cards price = "$49.99" product = {kids4} name = "Children Table w/ 2 Chairs" link = "https://www.ikea.com/us/en/p/laett-childrens-table-and-2-chairs-white-pine-50178411/"/>
      </div>
      <div className = "col">
      <Cards price = "$89.99" product = {kids5} name = "FLISAT Children Sensory Table" link = "https://www.ikea.com/us/en/p/flisat-childrens-table-50298418/"/>
      </div>      
      <div className = "col">
      <Cards price = "$359.71" product = {kids6} name = "Copernicus Bamboo Sensory Table" link = "https://www.shopbrodart.com/Library-School-Furniture/Childrens-Furniture/Chrildrens-Tables/Interactive-and-Sand-Tables/_/Copernicus-Bamboo-Sensory-Tables/?=&q=35056003"/>
      </div>
      <div className = "col">
      <Cards price = "$115.00" product = {kids7} name = "Abby Bamboo Daybed" link = "https://www.luneberry.com/products/abby-bamboo-daybed"/>
      </div>
      <div className = "col">
      <Cards price = "$359.99" product = {kids8} name = "Avenlur Bamboo Toddler Table" link = "https://www.walmart.com/ip/Avenlur-Bamboo-Toddler-Table-Chair-Set-5-Piece-Activity-Chairs-Children-Arts-Crafts-Homework-Snack-Time-Preschool-Classroom-Furniture-Gift-Boys-Girls/1714797928"/>
      </div>
      <div className = "col">
      <Cards price = "$224.75" product = {kids9} name = "Childrens bench BAMBOO-Bloomingville" link = " https://nordicdecoration.com/en_US/p/Childrens-bench-BAMBOO-Bloomingville/16539"/>
      </div>
      
      </div>
      </div>
    </>
  )
}
export default Kids