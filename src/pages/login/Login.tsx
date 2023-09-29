import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import {BsEye, BsEyeSlash} from "react-icons/bs";
import { redirect, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/UserSlice';




export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    
      dispatch(setUser({ email: username, password }));

      console.log('handleSubmit is called'); 
      console.log('username:', username);
      console.log('password:', password);
      
      return navigate("/dashboard")
    };
  
  return (
  <div className='md:w-screen max-[420px]:w-auto '>
    <Navbar/>
    <div className='grid place-items-center align-middle  '>
      <div className=' bg-white md:w-[31rem] md:h-[34rem] max-[420px]:h-auto max-[420px]:w-80 max-[420px]:align-middle max-[420px]:items-center rounded-lg space-y-4 md:py-[64px] max-[420px]:py-5 md:px-[56px] shadow-lg '>
        <div className='md:w-[24.6rem] md:h-[6.5rem] max-[420px]:m-4'>
          <h1 className=' font-bold text-4xl sm:w-[16rem] sm:h-12 '>Se connecter </h1>
          <h2 className=' text-base font-normal  sm:w-[21] h-11'>Entrez vos identifiants pour accéder à votre espace personnel.</h2>
        </div>
        <form className=' flex flex-col' onSubmit={handleSubmit}>
          <div className=' w-[24] h-52 gap-[1rem] mb-2'>
            <label className=' flex flex-col max-[420px]:m-4'>
              Adresse mail
              <input className=' p-2 rounded-md mb-5 border' placeholder='adresse@mail.com' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label className=' flex flex-col max-[420px]:m-4'>
              Mot de passe
              <p className='p-2 rounded-md md:mb-5 border  flex md:space-x-36 max-[420px]:space-x-12 '>
                <input className='flex items-center '
                placeholder='*****' 
                type={passwordVisible ? 'text': 'password'}
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                />
              <button 
                onClick={()=> setPasswordVisible(!passwordVisible)}
                type='button'>
                  {passwordVisible ? <BsEyeSlash/> : <BsEye/>}
              
              </button>
              </p>
            </label>
            <div className='flex relative justify-between max-[420px]:m-4 '>
              <p className=' font-normal md:text-sm max-[420px]:text-xs flex md:py-2 md:mb-5'>
                <Checkbox size='small' style={{ bottom:8, right:10, borderRadius:20  }}/>
                Se souvenir de moi
              </p>
              <p className='font-normal md:text-sm max-[420px]:text-xs flex  md:p-2 md:mb-5 text-[#369C96]'>
                Mot de passe oublié ?
              </p>
            </div>
          </div>
            <button 
            className=' bg-[#369C96] text-white   flex items-center justify-center md:w-[24] max-[420px]:h-5 md:h-16 md:gap-[10px]  py-[22px] md:px-[50px] rounded-lg max-[420px]:mt-6 max-[420px]:m-4' 
            type="submit"
            >SE CONNECTER
            
            </button>
        </form>
      </div>
    </div>
  </div>
  )
}