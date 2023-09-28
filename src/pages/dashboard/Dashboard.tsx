import HomeComponent from "../../components/HomeComponent"
import NavDashboard from "../../components/NavDashboard"
import { useSelector } from "react-redux"
import { selectUser, UserState } from "../../store/UserSlice"
import SideBar from "../../components/SideBar"
import {GiHamburgerMenu} from 'react-icons/gi'


const Dashboard = () => {
    
    const user: UserState = useSelector(selectUser)
    console.log(user.email);
    console.log(user.password);
    
    
  return (
    <div className="drawer lg:drawer-open bg-[#F4F8F6]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  flex-col items-center justify-center"> 
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><GiHamburgerMenu/></label>
            <NavDashboard user={user}/>
            <HomeComponent />
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

export default Dashboard