import './App.css'
import SideBar from './Component/SideBar/SideBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import Admin from './Component/Admin/Admin'
import History from './Component/History/History'

function App() {
  return (
    <div className="App">
      <SideBar />
      <main className="AppContent">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  )
}

export default App