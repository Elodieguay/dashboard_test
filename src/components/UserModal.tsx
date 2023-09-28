import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: UserData) => void;
}

export interface UserData {
  id: number;
  firstName: string;
  name: string;
  CityCode: number;
  Adress: string;
  mail:string;
  phone: string;
  type: string;
  plug: string;
  quote: string;
  target: boolean;
  // Ajoutez d'autres champs ici
}

export default function UserModal({ isOpen, onClose, onSubmit }: UserModalProps) {
  const [newUserData, setNewUserData] = useState<UserData>({
    id:0,
    name: '',
    type: '',
    plug: '',
    quote: '',
    target: false,
    // Ajoutez d'autres champs ici
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newUserData);
    onClose();
  };
  const custom = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ajouter un utilisateur"
      style={custom}
    >
      <h2 className=' text-lg font-bold pb-4'>Ajouter un utilisateur</h2>
      <form className=' flex flex-col  gap-3' onSubmit={handleFormSubmit}>
        <label>Nom:</label>
        <input
          className=' border-2'
          type="text"
          value={newUserData.name}
          onChange={(e) =>
            setNewUserData({ ...newUserData, name: e.target.value })
          }
        />
        <label>Borne choisie:</label>
        <input
          className=' border-2'
          type="text"
          value={newUserData.plug}
          onChange={(e) =>
            setNewUserData({ ...newUserData, plug: e.target.value })
          }
        />
        <label>Devis:</label>
        <input
          className=' border-2'
          type="text"
          value={newUserData.quote}
          onChange={(e) =>
            setNewUserData({ ...newUserData, quote: e.target.value })
          }
        />
        <button className='py-2 bg-[#369C96] text-white rounded-lg text-center text-sm' type="submit">Ajouter</button>
      </form>
    </ReactModal>
  );
}
