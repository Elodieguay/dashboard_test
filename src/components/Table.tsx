import { useState} from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {MdOutlineModeEdit} from 'react-icons/md';
import {CiMenuKebab} from 'react-icons/ci'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import deleteMeuble from '../../function/deleteMeuble';
import { houseData } from '../data/HouseData';
import {profileData} from '../data/ProfileData'
import UserModal from '../components/UserModal';
import { UserData } from '../components/UserModal';



export default function table() {

    const [data, setData] = useState(profileData); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const addUser = (newUser: UserData) => {
        const addingUser: UserData ={
         
            ...newUser
        }

        setData([...data, addingUser]);
    };

    

    const deleteClient = () =>{
        
    }

    return (
        <div className='flex bg-beige flex-col justify-around  space-y-10 mt-5'>
            <div className=' space-x-4  text-right'>
                <button className=' px-4 py-3 bg-[#369C96] text-white rounded-lg text-center text-sm '
                onClick={openModal}
                >Ajouter un utilisateur</button>           
                <button className=' px-4 py-3 bg-[#d1444d] text-white rounded-lg text-center text-sm '>Supprimer un utilisateur</button> 
            </div>
            <div className=' overflow-x-visible'>
            <table className=' bg-white table-auto mx-auto md:w-[50rem] md:h-[40%] table  '>
                <thead className=" font-bold text-base text-center">
                    <tr>
                        <th className='border-1 text-xl uppercase'>Nom</th>
                        <th className='border-1 text-xl uppercase'>Borne choisie</th>
                        <th className='border-1 text-xl uppercase'>Devis</th>
                        <th className='border-1 text-xl uppercase'>Etape</th>
                        <th className='border-1 text-xl uppercase'>Actions</th>
                    </tr>
                </thead>
                <tbody className=' text-center'>
                    {data ? (
                        data.map(el => (

                            <tr key={el.id} className="border-1">
                                <td className='px-2'>
                                    <Link to={`/profile/${el.id}`}>{el.name}</Link></td>
                                <td className='border-1  px-2'>{el.plug}</td>
                                <td className='border-1 px-2'>{el.quote}</td>
                                <td className='border-1 px-2'>Etape</td>

                                <td className='flex mx-2 my-auto  justify-center'>
                                    <div className='ml-2 '>
                                        <button> <MdOutlineModeEdit  className='text-dark-brown' size={25}  /></button>
                                    </div>
                                    <div className="ml-2">
                                        <button onClick ={() => deleteClient()}> <RiDeleteBin5Fill size={25} /></button>
                                    </div>
                                    <div className="ml-2 ">
                                        <button > <CiMenuKebab size={25} /></button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td><div>Loading...</div></td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            </div>
            <UserModal isOpen={isModalOpen} onClose={closeModal} onSubmit={addUser} />  
        </div>
    )
}

