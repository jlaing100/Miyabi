import React from 'react'

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
            <a href="#" className="px-1">Home</a>
            <a href="#" className="px-1">About</a>
            <a href="#" className="px-1">Team</a>
            <a href="#" className="px-1">Orders</a>
            <a href="#" className="px-1">Contact</a>
    </div>
    </>
  )
}

export default Footer