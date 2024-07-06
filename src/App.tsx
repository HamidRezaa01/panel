import { useState } from 'react'
import NavBar from '../src/Components/NavBar/NavBar'
import Sidebar from './Components/SideBar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/pages/Dashboard'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <>
      <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
      <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App