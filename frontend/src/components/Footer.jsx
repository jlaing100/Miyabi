import React from 'react'
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
            <Link to = "/" className = 'px-1 text-decoration-none text-white'>Home</Link>
            <Link to = "about"className = 'px-1 text-decoration-none text-white'>About</Link>
            <Link to = "cart" className = 'px-1 text-decoration-none text-white'>Orders</Link>
    </div>
    </>
  )
}

export default Footer