import Houses from "./HomeComponent"
import SideBar from "./SideBar"
import {GiHamburgerMenu} from 'react-icons/gi'


const Baros = () => {
  return (
    <div className="drawer lg:drawer-open bg-[#F4F8F6]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"> 
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><GiHamburgerMenu/></label>
            <Houses/>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay bg-[#F4F8F6]"></label> 
            <ul className="">
            <SideBar/>
            </ul> 
        </div>
    </div>  
)
}

export default Baros