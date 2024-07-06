import { FaBars } from 'react-icons/fa'

type SetSidebarToggle = {
    sidebarToggle: boolean
    setSidebarToggle: () => boolean
}

const NavBar = ({sidebarToggle, setSidebarToggle}: SetSidebarToggle) => {

    return (
        <div className="border-b border-b-2 shadow p-4 bg-slate-100">
            <div className=' relative container mx-auto flex justify-end items-center'>
                <div className={`${sidebarToggle ? 'hidden' : 'block'} cursor-pointer absolute left-0 font-medium`}>
                    <FaBars onClick={() => setSidebarToggle(!sidebarToggle)}/>
                </div>
                <nav className="font-medium">
                    <span className="cursor-pointer mr-4">Morning</span>
                    <button className="btn btn-outline btn-primary">Sign up</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar