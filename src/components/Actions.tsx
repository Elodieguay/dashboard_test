import  {actionData} from '../data/ActionData'
import { StatItem } from '../data/StatsData';


interface ActionsProps {
  incrementNum: () => void;
  statData: StatItem[]
}

const Actions: React.FC<ActionsProps> = ({incrementNum, statData}) => {

  const handleIncrement = (itemId: number) => {
    const installateursItem = statData.find((item) => item.id === itemId);
    if (installateursItem) {
      incrementNum();
    }
  };

  return (    

    <div className=' container flex max-sm:flex-col md:grid md:grid-cols-3 gap-3 max-sm:justify-center   max-sm:items-center '>
        {actionData.map((item) => (
            <div key={item.id}className=' '>
              <button 
                
                onClick={()=>{
                  if (item.title === 'Ajouter un installateur'){
                    handleIncrement(item.id)
                    console.log('okok');
                    
                  }
                }}
                className={`${
                  item.id % 2 === 0 ? 'bg-[#369C96] text-white' : 'bg-[#304399] text-white'
                }  md:text-lg flex w-56   xl:w-80   items-center  justify-center p-2 rounded-lg`}    
              >  
                <p className='flex gap-5'><item.icon size={25}/>{item.title}</p>
              </button>
           </div>  
        ))}
    </div>   
  )
}

export default Actions