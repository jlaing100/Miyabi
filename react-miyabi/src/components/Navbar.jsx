import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <a className="nav-link active" aria-current="page" href="#">Living</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Kitchen</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Dining</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Bedroom</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Bathroom</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Outdoor</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="#">Kids</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar