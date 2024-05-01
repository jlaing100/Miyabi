import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


const Navbar = () => {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const response = await fetchData();
        setUserData(response.data);

        // Check if tokens exist in localStorage
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const loggedIn = Boolean(accessToken && refreshToken); // Check both tokens existence

        setIsLoggedIn(loggedIn);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      // Clear tokens from localStorage
      localStorage.removeItem(accessToken);
      localStorage.removeItem(accessToken);
      // Update logged in state
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-collapse-center sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand ps-3" href="#">{userData.first_name}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-3">
                <Link to="/Living" className="nav-link active"><a aria-current="page">Living</a></Link>
              </li>
                            <li className="nav-item px-3">
                <Link to="/Kitchen" className="nav-link active"><a aria-current="page">Kitchen</a></Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/Dining" className="nav-link active"><a aria-current="page">Dining</a></Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/Bedroom" className="nav-link active"><a aria-current="page">Bedroom</a></Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/Bathroom" className="nav-link active"><a aria-current="page">Bathroom</a></Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/Outdoor" className="nav-link active"><a aria-current="page">Outdoor</a></Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/Kids" className="nav-link active"><a aria-current="page">Kids</a></Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-danger">
                Logout
              </Link>
            )
          }
          </div>
          </div>
        </nav>
      </>
    )
  }
  export default Navbar;

      
