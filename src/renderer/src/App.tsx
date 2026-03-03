import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SplashScreen from '@renderer/pages/SplashScreen/SplashScreen'



// импорт Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
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
