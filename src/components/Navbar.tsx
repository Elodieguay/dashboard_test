import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import reactLogo from '../assets/logo.svg'



const Navbar = () => {
  return (
    <div className=" max-[550px]:flex-col max-[420px]:h-full max-[550px]:items-center md:flex md:justify-between mx-auto sm:h-28 md:px-20 mb-10 flex md:align-middle max-[550px]:pt-8 ">
        <div className=" flex items-center md:space-x-4 text-base ">
            <MdOutlineKeyboardArrowLeft color='#369C96' size={32}/>
            <h1 className="text-[#369C96]">Retour vers la page d’accueil</h1>
        </div>
        <div className=" flex items-center">
            <img
                src={reactLogo} alt="logo" className=" w-40 h-8 "
            />
        </div>
    </div>
  )
}

export default Navbar