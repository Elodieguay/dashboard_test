
import {BiSolidUser, BiSolidFolderPlus } from 'react-icons/bi';
import {IoPieChart} from 'react-icons/io5'
import {FaFolderClosed, FaPlugCircleBolt, FaUserGroup} from 'react-icons/fa6'
import {GiCupcake} from 'react-icons/gi'

// iconsMenu
const iconsMenu = {
    BiSolidUser,
    IoPieChart,
    FaFolderClosed,
    FaPlugCircleBolt,
    FaUserGroup,
    BiSolidFolderPlus,
    GiCupcake

  
};

export interface StatItem {
    id: number;
    title: string;
    type: string;
    icon: React.ElementType;
    target: boolean;
    num: number | null;
  }


export const statData: StatItem[]= [
    {
        id: 1,
        title: 'Installateurs partenaires inscrits',
        type: 'item',
        icon: iconsMenu.BiSolidUser,
        target: true,
        num: 10,
    },
    {
        id: 2,
        title: 'Abonnements en cours',
        type: 'item',
        icon: iconsMenu.IoPieChart,
        target: true,
        num: 10,
  
    },
    {
        id: 3,
        title: 'Devis réalisés',
        type: 'item',
        icon: iconsMenu.FaFolderClosed,
        target: true ,
        num: 40, 
    },
    {
        id: 4,
        title: 'Points de charge',
        type: 'item',
        icon: iconsMenu.FaPlugCircleBolt,
        target: true,
        num: 100,  
    },
    {
        id: 5,
        title: 'Points de charge supervisés',
        type: 'item',
        icon: iconsMenu.FaUserGroup,
        target: true ,
        num: null, 
    },
    {
        id: 6,
        title: 'Taux de conversion',
        type: 'item',
        icon: iconsMenu.BiSolidFolderPlus,
        target: true ,
        num:null, 
    },
    {
        id: 7,
        title: "Chiffre d'affaires",
        type: 'item',
        icon: iconsMenu.GiCupcake,
        target: true,
        num: null,  
    }
]