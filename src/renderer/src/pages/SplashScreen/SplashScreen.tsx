import st from './SplashScreen.module.css'

export default function SplashScreen() {
  // const navigate = useNavigate()

  const handleExit = () => {
    window.api.app.exit()
  }

  const handleEnter = async () => {
    console.log(await window.api.settings.getSocket())
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
