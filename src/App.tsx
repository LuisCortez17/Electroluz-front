import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingLayout from './layouts/LandingLayout'
import Home from './pages/landing/home'
import Register from './pages/Auth/register'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/login'
import DashboardLayout from './layouts/DashboardLayout'
import HomeDashboard from './pages/dashboard/home-dashboard'

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
        </Route>

        <Route path='/' element={<DashboardLayout />} >
          <Route index element={<HomeDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
