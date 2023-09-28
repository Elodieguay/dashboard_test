import SideBar from '../../components/SideBar';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'
import UserInfo from '../../components/UserInfo';
import NavDashboard from '../../components/NavDashboard';
import { useParams, useNavigate } from 'react-router';
import { profileData } from '../../data/ProfileData';
import { ProfileItem } from '../../data/ProfileData';
import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import { useSelector } from "react-redux"
import { selectUser, UserState } from "../../store/UserSlice"



const Profile = () => {
  const user: UserState = useSelector(selectUser)

  const {id}= useParams<{id:string}>();
  const navigate= useNavigate();
  // const userProfile = profileData.find(profile => profile.id === parseInt(id ?? '0', 10));

  // on recherche l'index du current profil en fonction de l'id 
  const profileId = parseInt(id || '0', 10);
  const initialIndex = profileData.findIndex(profile => profile.id === profileId);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentProfile : ProfileItem | undefined = profileData[currentIndex];

  // On gère la navigation entre les pages ici

  const nextProfile = () =>{
    const nextIndex = currentIndex + 1;
    if (nextIndex < profileData.length){
      navigate(`/profile/${profileData[nextIndex].id}`)
    }
  }
  
  const previousProfile = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex < profileData.length){
      navigate(`/profile/${profileData[previousIndex].id}`)
    }
  }

  useEffect(() => {
    const newIndex = profileData.findIndex(profile => profile.id === profileId)
    if (newIndex !== -1){
      setCurrentIndex(newIndex)
    }
  }, [profileId])

  // Obtenir les profils des clients
  const previousIndex = currentIndex -1;
  const nextIndex = currentIndex + 1;

  const previousProfileData = previousIndex < profileData.length ? profileData[previousIndex] : null;
  const nextProfileData = nextIndex < profileData.length ? profileData[nextIndex] : null;

  return (
    
     <div className="drawer lg:drawer-open bg-[#F4F8F6]">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
     <div className="drawer-content flex flex-col items-center justify-center"> 
         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><GiHamburgerMenu/></label>
         <NavDashboard user={user}/>
         <div className=' w-full space-y-6    mt-10'>
              <div className=' flex justify-between mx-20'>
                <button 
                className=' flex'
                onClick = {previousProfile}>
                <MdOutlineArrowBackIosNew size={25}/>
                Précédent <span>{previousProfileData && `(${previousProfileData.firstName} ${previousProfileData.name})`} </span>
                </button>
                <button 
                className=' flex'
                onClick={ nextProfile}>
                Suivant <span>{nextProfileData && `(${nextProfileData.firstName} ${nextProfileData.name})`}</span>
                <MdOutlineArrowForwardIos size={25}/>
                </button>
              </div>
            <div className='  sm:flex  justify-center  sm:mx-12'>
              <div className=' bg-white w-[90%] sm:w-[25%]  h-[50%] rounded-lg m-5 sm:m-8 '>
                <UserInfo userProfile={currentProfile}/>
              </div>
              <div className=' bg-white w-[90%] sm:w-[50%]  h-[50%]  rounded-lg m-5 sm:m-8 '>
                <Form/>
              </div>
            </div>
            <div className='  flex flex-col  items-center  space-y-9 mx-12'>
              <div className=' bg-white w-[90%]   h-60  rounded-lg'> nom</div>
              <div className=' bg-white w-2/4 h-60 border rounded-lg'>tu</div>
              <div className=' bg-white w-2/4 h-60 border rounded-lg'>loi</div>
              <div className=' bg-white w-2/4 h-60 border rounded-lg'>elle</div>
              <div className=' bg-white w-2/4 h-60 border rounded-lg'>il</div>
            </div> 
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

export default Profile