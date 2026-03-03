import { useNavigate } from 'react-router-dom'
import st from './SplashScreen.module.css'

export default function SplashScreen() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('token', '123') // фейковый токен
    navigate('/splashScreen')
  }

  return (
    <div id={st.root}>
      <div>
        IP: <input type="text" />
      </div>
      <br/>
      <div>
        Пароль: <input type="text" />
      </div>
      <br/>
      <div id={st.enterButton}>Войти</div>
      <div id={st.exitButton}>Закрыть</div>
    </div>
  )
}
