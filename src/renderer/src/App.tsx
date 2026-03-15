import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

// импорт Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashScreen from './pages/SplashScreen/SplashScreen'
import { JSX } from 'react'


export default function App(): JSX.Element {
  // const token = localStorage.getItem('token')

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/splashScreen" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/splashScreen" element={<SplashScreen />} />
      </Routes>
    </>
  )
}
