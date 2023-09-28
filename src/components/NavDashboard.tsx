import {FiBell} from 'react-icons/fi'
import { UserState } from '../store/UserSlice'

interface NavDashboardProps {
  user: UserState
}

const NavDashboard: React.FC<NavDashboardProps> = ({user}) => {
  // const {email, password} = user;

  return (
    <div className="navbar  bg-[#F4F8F6] mb-10 border-b-2 w-[90%]  ">
    <div className="flex-1 ">
      <a className="flex  text-lg  gap-3 ">Bonjour <span> {user.email}</span></a>
    </div>
    <div className="flex-none space-x-3">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn  btn-ghost btn-circle">
          <div className="indicator">
            <FiBell size={20}/>
            <span className="badge badge-sm indicator-item">1</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg"></span>
            <span className="text-info">notification</span>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-16  ">
            <button className='rounded-full w-11  bg-red-400 p-4'>E</button>
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavDashboard