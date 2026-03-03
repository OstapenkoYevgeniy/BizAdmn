import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('token', '123') // фейковый токен
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Войти</button>
    </div>
  )
}
