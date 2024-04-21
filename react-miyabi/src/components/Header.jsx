import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../docs/images/Miyabi.png"
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Header = () => {
  return (
    <>

    <div className="text-center">
        <Link to = '/'>
        <img src= {logo} className="img-fluid py-2 border border-5 rounded-4 border-dark my-2" alt="../docs/images/Miyabi.png"/>
        <link rel="icon" type="image/x-icon" href="../docs/images/Miyabi_favicon.png"/>
        </Link>
    </div>


    <div className="text-center">
    <h6>"SUSTAINABLE ELEGANCE, REIMAGINED"</h6>
    </div>

    </>


);
}

export default Header