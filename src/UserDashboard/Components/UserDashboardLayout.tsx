import { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Sidebar from '../Components/SideBar/Sidebar'

const UserDashboardLayout = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    
    return (
        <>
            <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
            <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        </>
    )
}

export default UserDashboardLayout