import { Routes, Route } from 'react-router-dom'
import Dashboard from './UserDashboard/Components/Pages/Dashboard'
import UserDashboardLayout from './UserDashboard/Components/UserDashboardLayout'

const App = () => {

  return (
    <>
      <UserDashboardLayout/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App