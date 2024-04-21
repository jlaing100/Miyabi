import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import cartIcon from"../../../docs/images/cartIcon.png";
import menuIcon from "../../../docs/images/MenuIcon.png";
import profileIcon from "../../../docs/images/profileIcon.png";

const SearchBar = () => {
    const buttonStyle1 = {
        "background-color":"#ccb9b1",
        "color":"black",
    }
    
    const buttonStyle2 = {
        "color":"white",
    }

  return (
    <>
    <div className="container-fluid position-relative">
    <Link to = "/Menu">
        <button className="btn btn-dark ml-auto position-absolute bottom-0 start-1">
        <img src={menuIcon}alt="" />
        </button>
    </Link>
    
    <div className="input-group mb-2 w-50 container text-center">
      <input type="text" className="form-control border border-3 border-end-0 border-dark" placeholder="Search"/>
      <button className="btn border border-2 border-dark" type="submit" style={buttonStyle1}>Go</button>
    </div>

    <Link to = "/Cart">
    <button className="btn btn-dark mr-auto position-absolute bottom-0 end-0 ms-5">
      <img src={cartIcon} alt=""/>
    </button>
    </Link>

    <Link to = "/Login">
        <button className="btn btn-dark mr-auto position-absolute bottom-0 end-0 me-5">
        <img src={profileIcon} style={buttonStyle2} alt=""/>
        </button>
    </Link>


    </div>
    </>
  );
}

export default SearchBar