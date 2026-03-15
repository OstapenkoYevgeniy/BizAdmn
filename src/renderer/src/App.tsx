import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

// импорт Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashScreen from '@renderer/pages/SplashScreen/SplashScreen'

export default function App(): Element {
  const token = localStorage.getItem('token')

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
