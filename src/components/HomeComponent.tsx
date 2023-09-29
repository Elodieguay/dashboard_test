import Actions from "./Actions"
import Board from "./Board"
import Stats from "./Stats"
import {AiOutlineThunderbolt} from 'react-icons/ai'
import { useState } from "react"
import { statData, StatItem } from "../data/StatsData"



const Houses = () => {

  const [num, setNum] = useState<number | null>(null);

  const incrementNum = () => {
    if (num !== null) {
      setNum(num + 1);
    } else {
     
      setNum(1);
    }
  };

  return (
    <>

    <div className=" h-full mx-8 ">
      <div className="flex flex-col">
        <h1 className=" flex font-bold text-2xl gap-2 "><AiOutlineThunderbolt color="369C96"/>Tableau de bord </h1>  
        <Board/>
      </div>
      <div className="flex flex-col">
        <h1 className=" font-bold text-2xl mt-4 mb-4">Statistiques de <span className=" text-[#369C96]">Charge-in</span></h1>  
        <Stats />

      </div>
      <div className="flex flex-col justify-end pb-10 gap-6">
        <h1 className="max-sm:flex max-sm:items-center max-sm:justify-center font-bold text-2xl mt-6 pr-4">Actions <span className=" text-[#369C96]">requises</span></h1>  
        <Actions incrementNum={incrementNum} statData={statData}/> 
      </div>
    </div>
    
    </>
  )
}

export default Houses