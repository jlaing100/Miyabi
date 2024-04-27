import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    const footerStyle = {
        "background":"#333",
        "color":"#fff",
        "text-align":"center",
        "padding":"20px",
        "margin-top":"40px",
    }
  return (
    <>
    <div className="bg-dark" style={footerStyle}>
        <p>Copyright &copy; 2024 Miyabi</p>
            <Link to="/Home">Home</Link>&nbsp;
            <Link to="/About">About</Link>&nbsp;
            <Link to="/Team">Team</Link>&nbsp;
            <a href="#" className="px-1">Orders</a>
            <a href="#" className="px-1">Contact</a>
    </div>
    </>
  )
}

export default Footer