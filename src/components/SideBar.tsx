import reactLogo from '../assets/logo.svg'
import  { opportunite, utilisateurs, donnees,dashboard } from '../data/Menu_Items'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import {ImCross} from 'react-icons/im'
// import {GiHamburgerMenu} from 'react-icons/gi'

function SideBar() {
  

  return (
    <section className="bg-[#0C354F] text-white md:h-screen  max-[390px]:h-full w-64  flex-shrink-0 md:w-64 2xl:w-72  flex-col justify-between sticky ">
    <div className="p-4 ">
      <div className=" flex ">
        <img
            src={reactLogo} alt="logo" className=" w-40 h-8 "
        />
      </div>
    </div>
    <nav className=' grid place-items-center align-middle '>
    <div className="  items-center my-auto mt-2 gap-2 space-y-3 mx-4   ">
      <ul >
            {dashboard.map((item) => (
            <li key={item.id}> 
            <Link className="text-white text-base h-7 w-40  rounded-lg hover:bg-[#0000004D]  flex justify-content-start space-x-4 " 
              to={item.url}
            >
              <p className=' mr-3'><item.icon size={18}/></p>  
              {item.title}
            </Link>
            </li>
            ))}
        </ul>
        <ul className="space-y-4">
          <p className=' text-[#6A93AC] uppercase'>Opportunités</p>
            {opportunite.map((item) => (
            <li className="" key={item.id}> 
            <Link className="text-white text-base h-7 w-40  rounded-lg  hover:bg-[#0000004D]  flex justify-content-start" 
              to={item.url} 
            >
            <p className=' mr-3'><item.icon size={18}/></p>  
              {item.title}
            </Link>
            </li>
            ))}
        </ul>
        <ul className="space-y-4">
          <p className='text-[#6A93AC] uppercase'>Utilisateurs</p>
            {utilisateurs.map((item) => (
            <li className="" key={item.id}> 
            <Link className="text-white text-base h-7 w-40  rounded-lg  hover:bg-[#0000004D]  flex justify-content-start" 
              to={item.url}
            //   onClick={() => handlePageClick(item.url)}
            >
            <p className=' mr-3'><item.icon size={18}/></p>  
              {item.title}
            </Link>
            </li>
            ))}
        </ul>
        <ul className="space-y-4">
          <p className='text-[#6A93AC] uppercase'>donnees</p>
            {donnees.map((item) => (
            <li className=" " key={item.id}> 
            <Link className="text-white  text-base h-7 w-40  rounded-lg  hover:bg-[#0000004D] flex justify-content-start" 
              to={item.url}
            //   onClick={() => handlePageClick(item.url)}
            >
            <p className=' mr-3'><item.icon size={18}/></p>  
              {item.title}
            </Link>
            </li>
            ))}
        </ul>
    </div>
    </nav>
  
</section>
  );
}

export default SideBar;
