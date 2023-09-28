import { statData } from "../data/StatsData"
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Stats = () => {


  return (
    <div className="grid md:grid-cols-4 gap-6 max-sm:justify-center   ">
        {statData.map((items)=>(
           <Card key={items.id} className=' w-52  h-44 rounded-xl ' >
                <CardContent className=" space-y-4">
                    <items.icon size={30} color='369C96' className=' ' />
                    <Typography  component="div">
                        {items.title}
                    </Typography>
                    <Typography  component="div">
                        {items.num}
                    </Typography>
                </CardContent>
            </Card>                   
        ))}   
    </div>
    
  )
}

export default Stats