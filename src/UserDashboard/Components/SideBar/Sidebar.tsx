import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdClose } from "react-icons/md";

type SidebarToggle = {
    sidebarToggle: boolean
    setSidebarToggle: (toggle: boolean) => boolean
}

const Sidebar = ({sidebarToggle, setSidebarToggle}: SidebarToggle) => {
    
    return(
        <div className={`${sidebarToggle ? "block" : "hidden"} w-64 bg-slate-700 fixed h-full border-r-2 p-4`}>
            <nav className="mt-3 text-white font-bold list-none">
                <li className={`${sidebarToggle ? 'block': 'hidden'} py-2 cursor-pointer px-3 mb-7`}>
                    <MdClose className='text-2xl' onClick={() => setSidebarToggle(!sidebarToggle)}/>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-slat-800 py-2 cursor-pointer">
                    <a href="#" className="px-3">
                        <MdSpaceDashboard  className="inline-block w-6 h-6 mr-2 -mt-2"></MdSpaceDashboard >
                        Dashboard
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-slat-800 py-2 cursor-pointer">
                    <a href="#" className="px-3">
                        <MdOutlineProductionQuantityLimits  className="inline-block w-6 h-6 mr-2 -mt-2"></MdOutlineProductionQuantityLimits >
                        Products
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-slat-800 py-2 cursor-pointer">
                    <a href="#" className="px-3">
                        <CgProfile  className="inline-block w-6 h-6 mr-2 -mt-2"></CgProfile >
                        Profile
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-slat-800 py-2 cursor-pointer">
                    <a href="#" className="px-3">
                        <MdOutlineRoundaboutRight className="inline-block w-6 h-6 mr-2 -mt-2"></MdOutlineRoundaboutRight>
                        About
                    </a>
                </li>
            </nav>
        </div>
    )
}

export default Sidebar