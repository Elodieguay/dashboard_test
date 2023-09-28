import SideBar from '../../components/SideBar'
import Table from '../../components/Table'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsHouseDoor} from 'react-icons/bs';
import NavDashboard from '../../components/NavDashboard';
import { useSelector } from "react-redux"
import { selectUser, UserState } from "../../store/UserSlice"

const Houses = () => {
  const user: UserState = useSelector(selectUser)
  return (
  
     <div className="drawer lg:drawer-open bg-[#F4F8F6]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"> 
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><GiHamburgerMenu/></label>
            
             <NavDashboard user={user}/>
            <div className=' mb-40'>
              <div>
                <h1 className=' font-bold text-3xl flex translate-y-12  gap-3'><BsHouseDoor color="369C96"/>Maisons</h1>
              </div>
             
              <Table/>
            </div>
            
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

export default Houses