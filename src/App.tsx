import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingLayout from './layouts/LandingLayout'
import Home from './pages/landing/home/home'
import Register from './pages/auth/register'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/login'
import DashboardLayout from './layouts/DashboardLayout'
import HomeDashboard from './pages/dashboard/home-dashboard'
import Products from './pages/landing/products/products'
import Cart from './pages/landing/cart/cart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/' element={<LandingLayout />} >
          <Route index element={<Home />} />
          <Route path='product' element={<Products />} />
          <Route path='cart' element={<Cart />} />
        </Route>

        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<HomeDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
