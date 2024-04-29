import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
<div className="container ms-5 mt-5">
    <div className="row">
        <div className="col-md-6">
            <ul className="menu-list list-unstyled">
                <li className="menu-item special fw-bolder mb-3 border-bottom border-2 fs-1"><a href="#" className = 'text-decoration-none text-dark'>Trending</a></li>
                <li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Best Seller</a></li>
                <li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>New Release</a></li>
                <li className="menu-item special fw-bolder mb-3 border-bottom border-2 fs-1"><a href="#" className = 'text-decoration-none text-dark'>Rooms</a></li>
                <Link to = '/Bedroom' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Bedroom</a></li></Link >
                <Link to = '/Kitchen' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Kitchen</a></li></Link >
                <Link to = '/Dining' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Dining Rooms</a></li></Link >
                <Link to = '/Living' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Living Rooms</a></li></Link >
                <Link to = '/Kids' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Kids Rooms</a></li></Link >
                <Link to = '/Outdoor' className = 'text-decoration-none text-dark'><li className="menu-item special mb-3 fs-6"><a href="#" className = 'text-decoration-none text-dark'>Outdoor</a></li></Link >
                <li className="menu-item special fw-bolder mb-3 border-bottom border-2 fs-1"><a href="#" className = 'text-decoration-none text-dark'>Help & Settings</a></li>
                <li className="menu-item special fw-bolder mb-3 border-bottom border-2 fs-1"><a href="#" className = 'text-decoration-none text-dark'>Customer Settings</a></li>
            </ul>
        </div>
    </div>
</div>
</>
  );
};

export default Menu;


