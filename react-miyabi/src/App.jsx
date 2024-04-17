import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";
import Cart from "./pages/Cart";
import Dining from "./pages/Dining";
import Kitchen from "./pages/Kitchen";
import LandingDetail from "./pages/LandingDetail";
import Outdoor from "./pages/Outdoor";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Living from './pages/Living';
import Kids from './pages/Kids';

export default function App() {
  return (   

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}> {/* parent route */}
        <Route index element ={<Home />} />
        <Route path= "Bathroom" element ={<Bathroom />} /> 
        <Route path="Bedroom" element={<Bedroom />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Dining" element={<Dining/>} />
        <Route path="Kitchen" element={<Kitchen/>} />
        <Route path="Landing" element={<LandingDetail/>} />
        <Route path="Living" element={<Living />} />
        <Route path="Outdoor" element={<Outdoor/>} />
        <Route path="Kids" element={<Kids />} />
        <Route path="*" element={<NoPage/>} /> {/* catches all unidentified routes*/}
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);