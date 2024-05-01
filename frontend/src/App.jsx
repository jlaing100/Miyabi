import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from './pages/Layout';
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";
import Cart from "./pages/Cart";
import Dining from "./pages/Dining";
import Kitchen from "./pages/Kitchen";
import LandingDetail from "./pages/LandingDetail";
import Outdoor from "./pages/Outdoor";
import NoPage from './pages/NoPage';
import Living from './pages/Living';
import Kids from './pages/Kids';
import Menu from './pages/Menu';
import About from "./pages/About";
<<<<<<< Updated upstream
import {Toggle} from "../src/components/Toggle";
import "../docs/css/style.css";
import { QueryClient, QueryClientProvider } from "react-query";
=======
>>>>>>> Stashed changes



function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
<<<<<<< Updated upstream
    <div data-bs-theme={isDark ? "dark" : "light"}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
        />
    <QueryClientProvider client = {queryClient}>
=======
>>>>>>> Stashed changes
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
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
          <Route path="About" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
<<<<<<< Updated upstream
        <Route path="*" element={<NotFound />}></Route>
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
        <Route path="About" element={<About />} />
        </Route>
          <Route path="Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </div>
=======
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  )
}

export default App