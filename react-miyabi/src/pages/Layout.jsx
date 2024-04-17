import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    {/* <div>Hello</div> */}
    <Header />
    <SearchBar />
    <Navbar />
    <Outlet />
    <Footer />
    
    </>
  );
}

export default Layout