import react from "react"
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
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
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
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App