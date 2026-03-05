import { useNavigate } from 'react-router-dom'
import st from './SplashScreen.module.css'
import ipcRenderer = Electron.ipcRenderer

export default function SplashScreen() {
  const navigate = useNavigate()

  const handleExit = () => {
    window.electronApi.exitApp()
  }

  const handleEnter = () => {
    alert('kek')
  }

  return (
    <div id={st.root}>
      <div>
        IP: <input type="text" />
      </div>
      <br />
      <div>
        Пароль: <input type="text" />
      </div>
      <br />
      <div id={st.enterButton} onClick={handleEnter}>Войти</div>
      <div id={st.exitButton} onClick={handleExit}>
        Закрыть
      </div>
    </div>
  )
}
