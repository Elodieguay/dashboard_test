import { BsCarFront, BsTools } from 'react-icons/bs';
import {BiUser, BiChalkboard } from 'react-icons/bi';
import {LuFileSpreadsheet} from 'react-icons/lu'
import {GiArmorDowngrade} from 'react-icons/gi'
import {AiOutlineThunderbolt} from 'react-icons/ai'

// iconsMenu
const iconsMenu = {
  LuFileSpreadsheet,
  BiUser,
  GiArmorDowngrade,
  AiOutlineThunderbolt,
  BsCarFront,
  BsTools,
  BiChalkboard
};



export const actionData = [
    {
        id: 1,
        title: 'Ajouter un installateur',
        type: 'item',
        icon: iconsMenu.BiUser,
        target: true,
        color: ''
    },
    {
        id: 2,
        title: 'Ajouter une étude',
        type: 'item',
        icon: iconsMenu.LuFileSpreadsheet,
        target: true  
    },
    {
        id: 3,
        title: 'Ajouter une borne',
        type: 'item',
        icon: iconsMenu.AiOutlineThunderbolt,
        target: true  
    },
    {
        id: 4,
        title: 'Ajouter un véhicule',
        type: 'item',
        icon: iconsMenu.BsCarFront,
        target: true  
    },
    {
        id: 5,
        title: 'Ajouter un accessoire',
        type: 'item',
        icon: iconsMenu.BsTools,
        target: true  
    },
    {
        id: 6,
        title: 'Ajouter un objectif',
        type: 'item',
        icon: iconsMenu.BiChalkboard,
        target: true  
    }
]