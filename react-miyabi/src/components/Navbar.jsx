import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
 <>
 <nav className="navbar navbar-expand-md bg-dark navbar-collapse-center sticky-top"data-bs-theme="dark">
 <div className="container-fluid">
 <a className="navbar-brand ps-3" href="#">Shop By Room</a>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav mx-auto">
 <li className="nav-item px-3">
 <Link to = "/Living" className="nav-link active"><a aria-current="page">Living</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Kitchen" className="nav-link active"><a aria-current="page">Kitchen</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Dining" className="nav-link active"><a aria-current="page">Dining</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Bedroom" className="nav-link active"><a aria-current="page">Bedroom</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Bathroom" className="nav-link active"><a aria-current="page">Bathroom</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Outdoor" className="nav-link active"><a aria-current="page">Outdoor</a></Link>
 </li>
 <li className="nav-item px-3">
 <Link to = "/Kids" className="nav-link active"><a aria-current="page">Kids</a></Link>
 </li>
 </ul>
 </div>
 </div>
 </nav>
 </>
 )
}

export default Navbar