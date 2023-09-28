// assets
import { BsHouseDoor, BsCarFront, BsTools } from 'react-icons/bs';
import {BiBuildingHouse,BiUser, BiChalkboard } from 'react-icons/bi';
import {SiWindowsxp} from 'react-icons/si'
import {GiArmorDowngrade} from 'react-icons/gi'
import {AiOutlineThunderbolt} from 'react-icons/ai'

// iconsMenu
const iconsMenu = {
  BsHouseDoor,
  BiBuildingHouse,
  SiWindowsxp,
  BiUser,
  GiArmorDowngrade,
  AiOutlineThunderbolt,
  BsCarFront,
  BsTools,
  BiChalkboard
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //
  export interface MenuItem {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
  }

 export const dashboard : MenuItem[] =  [
    {
      id: 1,
      title: 'Accueil',
      url: '/dashboard',
      icon: iconsMenu.SiWindowsxp,
    }
  ]



export const opportunite:MenuItem[] = 
 [
    {
      id: 1,
      title: 'Maisons',
      url: '/houses',
      icon: iconsMenu.BsHouseDoor,
    },
    {
      id: 2,
      title: 'Appartements',
      url: '/flats',
      icon: iconsMenu.BsHouseDoor,
    },
    {
      id: 3,
      title: 'Etudes',
      url: '/studies',
      icon: iconsMenu.BiBuildingHouse,
    }
  ];

  export const utilisateurs:MenuItem[] = 
  [
     {
       id: 1,
       title: 'CEO & Admins',
       url: '/admin',
       icon: iconsMenu.GiArmorDowngrade,
     },
     {
       id: 2,
       title: 'Project Managers',
       url: '/managers',
       icon: iconsMenu.BiUser,
     },
     {
       id: 3,
       title: 'Installateurs',
       url: '/installer',
       icon: iconsMenu.BiUser,
     },
     {
      id: 4,
      title: 'Clients B2C',
      url: '/clients',
      icon: iconsMenu.BiUser,
    }
   ];

   export const donnees:MenuItem[] = 
  [
     {
       id: 1,
       title: 'Bornes',
       url: '/bornes',
       icon: iconsMenu.AiOutlineThunderbolt,
     },
     {
       id: 2,
       title: 'Véhicules',
       url: '/cars',
       icon: iconsMenu.BsCarFront,
     },
     {
       id: 3,
       title: 'Accessoires',
       url: '/subsidiaries',
       icon: iconsMenu.BsTools,
     },
     {
      id: 4,
      title: 'Objectifs',
      url: '/objectives',
      icon: iconsMenu.BiChalkboard,
    }
   ];