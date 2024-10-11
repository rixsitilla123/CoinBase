import { useContext } from 'react'
import { Context } from './context/Context'
import LoginRoutes from './routes/Login'	
import DashboardRoutes from './routes/Dashboard'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css'
function App() {
	AOS.init()
	const {token} = useContext(Context)
	if(token){
		return <DashboardRoutes/>
	}else{
		return <LoginRoutes/>
	}
}
export default App
