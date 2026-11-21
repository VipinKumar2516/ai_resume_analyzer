import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SideBar from './Component/SideBar/SideBar'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import Admin from './Component/Admin/Admin'
import History from './Component/History/History'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path= '/dashboard' element={<Dashboard/>} />
        <Route path= '/admin' element={<Admin/>} />
        <Route path= '/history' element={<History/>} />
      </Routes>
    </div>
  )
}

export default App
